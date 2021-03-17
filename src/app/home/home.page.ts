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

  public newTaskName = "";

  public tasks: Task[] = [
  ]

  public addTask() {
    const newTask = {
      name: this.newTaskName,
      done: false,
    }
    this.tasks.push(newTask);
    this.newTaskName = "";
  }

  constructor() { }

}
