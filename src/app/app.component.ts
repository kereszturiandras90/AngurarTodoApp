import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My todos';
  todo = [{label: 'Brink Milk', done: false, priority: 3}, 
  {label: 'clean room', done: true, priority: 1},
  {label: 'kill bill', done: false, priority: 2}]
}
