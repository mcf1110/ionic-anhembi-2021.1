import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentValue = 0;
  public maxValue = 0;
  public selectedCash = 0;

  constructor() { }

  public increment() {
    this.currentValue += this.selectedCash;
    // this.maxValue = Math.max(this.maxValue, this.currentValue);
    if (this.currentValue > this.maxValue) {
      this.maxValue = this.currentValue;
    }

    this.selectedCash = 0;
  }

  public reset() {
    this.currentValue = 0;
  }

  public decrement() {
    // this.currentValue = Math.max(this.currentValue - this.selectedCash, 0);
    if (this.selectedCash > this.currentValue) {
      this.currentValue = 0;
    } else {
      this.currentValue -= this.selectedCash;
    }

    this.selectedCash = 0;
  }

}
