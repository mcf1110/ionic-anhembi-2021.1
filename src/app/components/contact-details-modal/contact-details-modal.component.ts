import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details-modal',
  templateUrl: './contact-details-modal.component.html',
  styleUrls: ['./contact-details-modal.component.scss'],
})
export class ContactDetailsModalComponent {

  @Input() contact: Contact;

  constructor(private modalController: ModalController) {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
