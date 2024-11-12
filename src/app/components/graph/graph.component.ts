import { Component } from '@angular/core';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {

  activatedButtonClasss: boolean= false;
  showList: boolean = false;
  showGraph: boolean = true;

  activateList() {
    this.showList = true;
    this.showGraph = false;
    this.activatedButtonClasss = true;
    
  }

  activateGraph() {
    this.showGraph = true;
    this.showList = false;
    this.activatedButtonClasss = true;
  }



}
