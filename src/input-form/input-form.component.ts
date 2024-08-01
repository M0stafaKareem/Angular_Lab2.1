import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  @Output() messageEvent = new EventEmitter<string>();
  todoInp: string = '';

  updateInput(event: any) {
    this.todoInp = event.target.value;
  }

  sendMessage() {
    if (this.todoInp.trim()) {
      this.messageEvent.emit(this.todoInp);
      this.todoInp = '';
    }
  }
}
