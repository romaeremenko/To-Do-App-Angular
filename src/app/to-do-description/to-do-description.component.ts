import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-to-do-description',
  templateUrl: './to-do-description.component.html',
  styleUrls: ['./to-do-description.component.css']
})
  export class ToDoDescriptionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor(private todos: TodoService) {
    console.log(this.description);
  }

  ngOnInit() {
  }

  changeDescription(description: string): void {
    this.todos.setDescription(this.title, description);
  }

}
