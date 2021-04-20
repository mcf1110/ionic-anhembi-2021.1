import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';

interface Contact {
  name: string;
  user: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts: Contact[] = [
    {
      name: 'Matheus',
      user: 'mcf1110'
    },
    {
      name: 'Rafaela',
      user: 'java2124'
    },
    {
      name: 'Leo',
      user: 'lele123'
    },
    {
      name: 'Augusto',
      user: 'gusmoreto'
    },
    {
      name: 'Isabella',
      user: 'IsabellaFagundes'
    },
    {
      name: 'Guilherme',
      user: 'gui-leandro'
    },
    {
      name: 'Arthur',
      user: 'aarthurssl'
    },
    {
      name: 'Matheus',
      user: 'Math-rm1'
    }
  ];

  constructor(private modalController: ModalController) { }

  public async openModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsModalComponent,
      componentProps: {
        contact: contact
      }
    });
    modal.present();
  }

}
