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
  public completedTaskPercentage = 0;
  public currentFilter: 'all' | 'done' | 'todo' = 'all';
  public currentSearch = '';

  public filteredTasks = this.tasks;

  constructor() { }

  public addTask() {
    this.tasks.push({
      name: this.newTaskName,
      done: false
    });
    this.newTaskName = '';

    this.computeCompletedTaskPercentage();
    this.updateFilter();
  }

  public computeCompletedTaskPercentage() {
    // let completedTaskCount = 0;
    // for (const task of this.tasks) {
    //   if (task.done) {
    //     completedTaskCount++;
    //   }
    // }
    // this.completedTaskPercentage = completedTaskCount / this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.done);
    this.completedTaskPercentage = completedTasks.length / this.tasks.length;
  }

  public removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.updateFilter();
  }

  public updateFilter() {
    let firstFilter: Task[];
    if (this.currentFilter === 'all') {
      firstFilter = this.tasks;
    } else if (this.currentFilter === 'done') {
      firstFilter = this.tasks.filter(task => task.done);
    } else if (this.currentFilter === 'todo') {
      firstFilter = this.tasks.filter(task => !task.done);
    }

    if (this.currentSearch === '') {
      this.filteredTasks = firstFilter;
    } else {
      const lowercased = this.currentSearch.toLowerCase();
      this.filteredTasks = firstFilter
        .filter(task => task.name.toLowerCase().includes(lowercased));
    }
  }

}
