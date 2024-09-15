import { ChangeDetectorRef, Component, ElementRef, input, OnInit, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { TechnologyService } from "../../services/technology.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { Config } from "../../models/config";
import { TreeNode } from "../../models/tree-node";

declare var Treant: any;

@Component({
    selector: 'tech-tree',
    standalone: true,
    imports: [
        NgIf, NgOptimizedImage
    ],
    templateUrl: './tech-tree.component.html',
    styleUrl: './tech-tree.component.scss'
})
export class TechTreeComponent implements OnInit {
    area = input.required<string>();
    private node = viewChild.required<TemplateRef<any>>('node');
    private view = viewChild.required('container', {read: ViewContainerRef});
    private container = viewChild.required<ElementRef>('parent');

    private config: Config

    constructor(private techService: TechnologyService, private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
        this.config = new Config();
        this.config.callback = {
            onCreateNode: this.createNode(),
            onTreeLoaded: this.onTreeLoaded()
        }
    }

    load(data: any): void {
      this.container().nativeElement.setAttribute('style', '');
      this.init(data);
      this.config.container = '#' + this.container().nativeElement.getAttribute('id');
      new Treant({chart: this.config, nodeStructure: data.children[0]});
    }

    private init(node: any) {
        node.meta = node;
        node.children.forEach((child: any) => this.init(child));
    }

    ngOnInit(): void {
        this.route.url.pipe(
            map(u => u.toString()),
            switchMap(version => this.techService.fetch(version, this.area()))
        ).subscribe(data => this.load(data));
    }

    protected createNode() {
        return (treeNode: any) => {
            let viewRef = this.view().createEmbeddedView(this.node(), {$implicit: treeNode.meta, item: treeNode});
            let e = viewRef.rootNodes[0];
            e.className = 'node ' + treeNode.meta.area;
            return e;
        }
    }

    private onTreeLoaded() {
        return (root: TreeNode) => {
            this.changeDetectorRef.detectChanges();
        }
    }
}
