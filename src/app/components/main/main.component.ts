import { Component } from '@angular/core';
import { TechTreeComponent } from "../tech-tree/tech-tree.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TechTreeComponent,
    NavComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selected: number = 0;
}
