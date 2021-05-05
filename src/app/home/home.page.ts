import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = this.contactService.contacts;

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) { }

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
