import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDescriptionComponent } from './to-do-description.component';

describe('ToDoDescriptionComponent', () => {
  let component: ToDoDescriptionComponent;
  let fixture: ComponentFixture<ToDoDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
