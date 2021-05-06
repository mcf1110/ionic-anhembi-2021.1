import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact } from 'src/app/services/contact.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {

  @Input() contact: Contact;

  constructor(private modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }

}
