import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-to-do-change-title',
  templateUrl: './to-do-change-title.component.html',
  styleUrls: ['./to-do-change-title.component.css'],
})
export class ToDoChangeTitleComponent implements OnInit {
  @Input() title: string;
  @Output() onConfirm = new EventEmitter<string>();
  @Output() onExit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  submitForm(newTitle: string) {
    this.onConfirm.emit(newTitle);
  }

  exitForm(): void {
    this.onExit.emit();
  }

}
