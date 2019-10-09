import {Injectable} from '@angular/core';
import {Todo} from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: Todo [] = [];

  private getTitleFromNode($event): string {
    return $event.target.parentElement.innerText.replace(/✔/, '').trim();
  }

  private getIndex(element): number {
    return this.toDoList.map(obj => obj.task).indexOf(element);
  }

  constructor() {
  }

  addTask(title): void {
    if (this.toDoList.filter(todo => todo.task === title).length > 0) {
      return;
    }
    this.toDoList.push({
      task: title,
      status: false,
      description: '',
      edited: false,
    });

    console.log(this.toDoList);
  }

  deleteTask($event): void {
    const answer = confirm('Удалить?');
    if (!answer) {
      return;
    }
    const task = this.getTitleFromNode($event);
    this.toDoList = this.toDoList.filter(todo => todo.task !== task);
  }

  changeStatus($event): void {
    const task = this.getTitleFromNode($event);
    if ($event.target.checked) {
      this.toDoList[this.getIndex(task)].edited = false;
    }
    this.toDoList[this.getIndex(task)].status = $event.target.checked;
  }

  getLength(): boolean {
    return this.toDoList.length > 0;
  }

  changeTitle(oldTitle, newTitle): void {
    if (this.toDoList.filter((todo) => todo.task === newTitle).length) {
      alert('Уже существует');
    } else {
      this.toDoList[this.getIndex(oldTitle)].task = newTitle;
      console.log(this.toDoList);
    }
  }


  changeEditStatus(task: string): void {
    this.toDoList[this.getIndex(task)].edited = !this.toDoList[this.getIndex(task)].edited;
  }

  setDescription(title: string, description: string): void {
    this.toDoList[this.getIndex(title)].description = description;
  }

  clear(): void {
    if (this.toDoList.length > 0) {
      const answer = confirm('Удалить всё?');
      if (answer) {
        this.toDoList = [];
      }
    }
  }
}
