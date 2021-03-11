import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentValue = 0;
  public maxValue = 0;
  public selectedValue = 0;

  public increment() {
    this.currentValue += this.selectedValue;
    this.maxValue = Math.max(this.maxValue, this.currentValue);
    this.selectedValue = 0;
    // if (this.currentValue > this.maxValue) {
    //   this.maxValue = this.currentValue;
    // }
  }

  public decrement() {
    this.currentValue = Math.max(0, this.currentValue - this.selectedValue);
    this.selectedValue = 0;
    // if (this.currentValue > 0) {
    //   this.currentValue--;
    // }
  }

  public reset() {
    this.currentValue = 0;
  }

}
