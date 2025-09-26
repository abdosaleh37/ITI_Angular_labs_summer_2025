import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm {
  @Output() taskEmitter = new EventEmitter<string>();
  task: string = '';

  sendTask() {
    this.taskEmitter.emit(this.task);
    this.task = '';
  }
}
