import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, InputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
  todosArray: string[] = [];

  recieveMessage($event: string) {
    this.todosArray.push($event);
  }

  removeTodo(todoId: number) {
    this.todosArray = this.todosArray.filter((item, idx) => idx != todoId);
  }
}
