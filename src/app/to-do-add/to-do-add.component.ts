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
  listOfTasks: Todo[] = [];

  constructor(private todos: TodoService) {
    this.todoTitle = '';
    this.showTable = false;

    this.listOfTasks = JSON.parse(localStorage.getItem('list_of_tasks'));

    if (this.listOfTasks != null) {
      this.todos.toDoList = this.listOfTasks;
    }
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
