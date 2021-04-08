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
  public filteredTasks: Task[] = this.tasks;

  public newTaskName = '';
  public progress = 0;
  public selectedFilter: 'all' | 'done' | 'todo' = 'all';

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

    this.calculateProgress();
    this.updateFilter();
  }

  public calculateProgress() {
    this.progress = this.tasks.filter(t => t.done).length / this.tasks.length
  }

  public removeTask(toRemove: Task) {
    const index = this.tasks.indexOf(toRemove)
    this.tasks.splice(index, 1);

    this.updateFilter();
  }

  public updateFilter() {
    if (this.selectedFilter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.selectedFilter === 'done') {
      this.filteredTasks = this.tasks.filter(t => t.done);
    } else {
      this.filteredTasks = this.tasks.filter(t => !t.done);
    }
  }

}
