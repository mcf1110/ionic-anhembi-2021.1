import { Component } from '@angular/core';

interface Transaction {
  value: number;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentValue = 0;
  public maxValue = 0;
  public selectedValue = 0;

  public transactions: Transaction[] = []

  public increment() {
    this.currentValue += this.selectedValue;
    this.maxValue = Math.max(this.maxValue, this.currentValue);

    this.transactions.push({
      value: this.selectedValue,
      date: new Date()
    })

    this.selectedValue = 0;
    // if (this.currentValue > this.maxValue) {
    //   this.maxValue = this.currentValue;
    // }
  }

}
