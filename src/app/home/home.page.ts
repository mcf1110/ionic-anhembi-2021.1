import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts: Contact[];

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {
    this.contacts = this.contactService.allContacts;
  }

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
