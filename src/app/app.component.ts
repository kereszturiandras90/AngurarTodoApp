import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My todos';
  todos = [{label: 'Brink Milk', done: false, priority: 3}, 
  {label: 'clean room', done: true, priority: 1},
  {label: 'kill bill', done: false, priority: 2},];

  addTodo(newTodoLabel: any) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done:false
    };
    this.todos.push(newTodo)
  }

  deleteTodo(todo: any){
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
