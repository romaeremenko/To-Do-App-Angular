import {Component, OnChanges, OnInit} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.css'],
})
export class ToDoViewComponent implements OnInit {
  title: string;
  description: string;
  onChangeTitle: boolean;
  onChangeDescription: boolean;

  constructor(private todos: TodoService) {
    this.title = '';
    this.onChangeTitle = false;
    this.onChangeDescription = false;
  }

  ngOnInit() {
  }

  editTitle($event): void {
    this.title = $event.target.parentElement.children[1].innerText;
    this.onChangeTitle = true;
  }

  editDescription($event): void {
    this.title = $event.target.parentElement.children[1].innerText;
    this.todos.changeEditStatus(this.title);
  }

  onConfirm(title: string): void {
    if (title === '') {
      alert('Строка пуста');
    } else if (title !== this.title) {
      this.todos.changeTitle(this.title, title);
    }
    this.onChangeTitle = false;
  }

  onExit(): void {
    this.onChangeTitle = false;
  }

  showDescription(editStatus: boolean, todoStatus: boolean): boolean {
    if (todoStatus === false) {
      return editStatus;
    }
  }
}
