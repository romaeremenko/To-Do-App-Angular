import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoChangeTitleComponent } from './to-do-change-title.component';

describe('ToDoChangeTitleComponent', () => {
  let component: ToDoChangeTitleComponent;
  let fixture: ComponentFixture<ToDoChangeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoChangeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
