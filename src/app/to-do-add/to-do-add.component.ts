import {Component, OnInit} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css'],
})
export class ToDoAddComponent implements OnInit {
  todoTitle: string;
  showTable: boolean;

  constructor(private todos: TodoService) {
    this.todoTitle = '';
    this.showTable = false;
  }

  ngOnInit() {

  }

  addToTasks(todoTitle: string = ''): void {
    if (todoTitle.trim()) {
        this.todos.addTask(todoTitle);
    }
    this.showTable = true;
    this.todoTitle = '';
  }

  clearAll(): void {
    this.todos.clear();
  }

}
