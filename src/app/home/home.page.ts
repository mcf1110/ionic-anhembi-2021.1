import { Component } from '@angular/core';

interface Task {
  name: string;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public newTaskName = '';
  public completedPercentage = 0;

  public tasks: Task[] = [];
  public filteredTasks: Task[] = this.tasks;
  public currentFilter: 'all' | 'done' | 'todo' = 'all';
  public currentSearch = '';

  public calculateCompletedPercentage() {
    // let completedAmount = 0;
    // for (const task of this.tasks) {
    //   if (task.done) {
    //     completedAmount++;
    //   }
    // }
    // this.completedPercentage = completedAmount / this.tasks.length;
    const completedTasks = this.tasks.filter(task => task.done);
    this.completedPercentage = completedTasks.length / this.tasks.length;
  }

  public addTask() {
    const newTask = {
      name: this.newTaskName,
      done: false,
      id: new Date().getTime()
    };
    this.tasks.push(newTask);
    this.newTaskName = '';
    this.calculateCompletedPercentage();
    this.updateFilter();
  }

  public removeTask(id: number) {
    // let taskIndex;
    // for (let i = 0; i < this.tasks.length; i++) {
    //   if (id === this.tasks[i].id) {
    //     taskIndex = i;
    //     break;
    //   }
    // }
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(taskIndex, 1);
    this.updateFilter();
  }

  public updateFilter() {
    let filteredBySegment: Task[];
    if (this.currentFilter === 'all') {
      filteredBySegment = this.tasks;
    } else if (this.currentFilter === 'done') {
      filteredBySegment = this.tasks.filter(task => task.done);
    } else if (this.currentFilter === 'todo') {
      filteredBySegment = this.tasks.filter(task => !task.done);
    }

    if (this.currentSearch === '') {
      this.filteredTasks = filteredBySegment;
    } else {
      const lowercase = this.currentSearch.toLowerCase()
      this.filteredTasks = filteredBySegment.filter(
        task => task.name.toLowerCase().includes(lowercase)
      );
    }
  }

}
