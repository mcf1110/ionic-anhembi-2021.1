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

  public tasks: Task[] = []
  public newTaskName = '';

  constructor() { }

  public addTask() {
    this.tasks.push({
      name: this.newTaskName,
      done: false
    })
    this.newTaskName = '';
  }

}
