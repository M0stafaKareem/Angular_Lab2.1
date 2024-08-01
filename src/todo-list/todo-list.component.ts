import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todosArray: string[] = [];
  @Output() removeTodoEvent = new EventEmitter<number>();

  onRemoveTodo(index: number) {
    this.removeTodoEvent.emit(index);
  }
}
