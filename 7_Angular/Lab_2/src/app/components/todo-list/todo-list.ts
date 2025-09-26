import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [NgClass],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  @Input() tasks: { id: number; title: string; done: boolean }[] = [];
  @Output() taskDeleted = new EventEmitter<number>();

  toggleDone(task: any){
    task.done = !task.done;
  }

  deleteTask(taskId: number){
    this.taskDeleted.emit(taskId);
  }
}

