import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoService} from "./todo.service";

import { AppComponent } from './app.component';
import {TodoListComponent} from "./todo-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
