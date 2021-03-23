import { Component } from '@angular/core';

interface Transaction {
  date: Date;
  amount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public counter = 0;
  public selectedValue = 0;
  public transactions: Transaction[] = [];

  public deposit() {
    this.counter += this.selectedValue;
    this.transactions.unshift({
      amount: this.selectedValue,
      date: new Date()
    })
    this.selectedValue = 0;
  }

}
