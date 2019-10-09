import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoViewComponent } from './to-do-view/to-do-view.component';
import { TodoService } from './todo.service';
import { ToDoChangeTitleComponent } from './to-do-change-title/to-do-change-title.component';
import { ToDoDescriptionComponent } from './to-do-description/to-do-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAddComponent,
    ToDoViewComponent,
    ToDoChangeTitleComponent,
    ToDoDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
