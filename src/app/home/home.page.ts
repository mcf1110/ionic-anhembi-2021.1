import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentValue = 0;
  public maxValue = 0;

  constructor() { }

  public increment() {
    this.currentValue++;
    // this.maxValue = Math.max(this.maxValue, this.currentValue);
    if (this.currentValue > this.maxValue) {
      this.maxValue = this.currentValue;
    }
  }

  public reset() {
    this.currentValue = 0;
  }

  public decrement() {
    // this.currentValue = Math.max(this.currentValue - 1, 0);
    if (this.currentValue > 0) {
      this.currentValue--;
    }
  }

}
