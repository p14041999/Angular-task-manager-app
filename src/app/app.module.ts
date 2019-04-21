import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { TaskComponent } from './task-component/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponentComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
