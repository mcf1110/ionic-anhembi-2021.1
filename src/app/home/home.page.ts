import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [
    {
      name: 'Matheus',
      user: 'mcf1110'
    },
    {
      name: 'Munizera',
      user: 'MatheusMunizera'
    },
    {
      name: 'Renalt',
      user: 'zerklly'
    },
    {
      name: 'Laura',
      user: 'Laurokah'
    },
    {
      name: 'Luiz',
      user: 'louizlv'

    }, {
      name: 'Lucas',
      user: 'LucasFreire1'
    }, {
      name: 'Jonathan',
      user: 'JonathanFerreira10'
    },
  ];

  constructor(private modalController: ModalController) { }

  public async openModal(c) {
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
        contact: c
      }
    });
    modal.present();
  }

}
