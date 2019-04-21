import { Component, OnInit } from '@angular/core';
import {TASKS} from '../mock-tasks';
import {Task} from '../task';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss']
})
export class TaskComponentComponent implements OnInit {
  tasks = TASKS;
  constructor() {
  }
  selectedTask: Task;
  ngOnInit() {
    this.selectedTask = this.tasks[0];
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
