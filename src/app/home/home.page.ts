import { Component } from '@angular/core';

interface Task {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: Task[] = [];
  public newTaskName = '';

  constructor() { }

  public addNewTask() {
    if (this.newTaskName.trim().length == 0) {
      return;
    }
    this.tasks.push({
      name: this.newTaskName.trim(),
      done: false
    })
    this.newTaskName = '';
  }

}
