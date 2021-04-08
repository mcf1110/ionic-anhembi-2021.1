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
  public selectedCash = 0;

  public transactions: Transaction[] = []

  constructor() { }

  public increment() {
    this.currentValue += this.selectedCash;
    this.transactions.unshift({
      value: this.selectedCash,
      date: new Date()
    })
    this.selectedCash = 0;
  }

}
