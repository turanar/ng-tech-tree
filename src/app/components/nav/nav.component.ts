import {Component, model, output} from '@angular/core';
import { KeyValuePipe, NgOptimizedImage } from "@angular/common";

export class AreaOption {
  label: string;
  icon: string;
  constructor(label: string, icon: string) {
    this.label = label;
    this.icon = icon;
  }
}

export let AreaOptions: { [key in number]: AreaOption } = {
  [0]: new AreaOption("All", "research_icon.png"),
  [1]: new AreaOption("Physics", "physics_research.png"),
  [2]: new AreaOption("Society", "society_research.png"),
  [3]: new AreaOption("Engineering", "engineering_research.png"),
  [4]: new AreaOption("Anomalies", "event.png")
};

@Component({
  selector: 'app-nav',
  standalone: true,
    imports: [
        KeyValuePipe,
        NgOptimizedImage
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  readonly areaOptions = AreaOptions;
  selected = model(0);
  onTabChange = output<number>();

  onClick(value: number) {
    this.selected.set(value);
    this.onTabChange.emit(value);
  }
}
