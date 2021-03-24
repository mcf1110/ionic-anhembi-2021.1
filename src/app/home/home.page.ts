import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(private alertController: AlertController) { }

  public deposit() {
    this.counter += this.selectedValue;
    this.transactions.unshift({
      amount: this.selectedValue,
      date: new Date()
    });
    this.selectedValue = 0;
  }

  public async confirmWipe() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'Essa operação não poderá ser desfeita!',
      buttons: [
        {
          text: 'Sim',
          handler: () => this.wipeAccount()
        },
        'Me enganei'
      ]
    });
    alert.present();
  }

  private wipeAccount() {
    this.transactions.unshift({
      amount: -this.counter,
      date: new Date()
    });
    this.counter = 0;
    this.selectedValue = 0;
  }

}
