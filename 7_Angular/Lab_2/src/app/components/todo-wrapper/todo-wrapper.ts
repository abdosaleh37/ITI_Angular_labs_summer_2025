import { Component } from '@angular/core';
import { TodoList } from "../todo-list/todo-list";
import { TodoForm } from "../todo-form/todo-form";

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoList, TodoForm],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css'
})
export class TodoWrapper {
  tasks: { id: number; title: string; done: boolean }[] = [];
  nextId = 1;

  addTask(task: string){
    this.tasks.push({id: this.nextId++, title: task, done: false});
  }

  deleteTask(taskId: number){
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
