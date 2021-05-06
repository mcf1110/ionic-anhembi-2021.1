import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
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
    private routerOutlet: IonRouterOutlet,
    private contactService: ContactService
  ) {
    this.contacts = this.contactService.contacts;
  }

  public async openModal(selectedContact: Contact) {
    const modal = await this.modalController.create({
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      component: DetailsModalComponent,
      componentProps: {
        contact: selectedContact
      }
    });
    modal.present();
  }

}
