import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphComponent } from "./components/graph/graph.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashbord';
}
