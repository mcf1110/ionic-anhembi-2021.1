import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details-modal',
  templateUrl: './contact-details-modal.component.html',
  styleUrls: ['./contact-details-modal.component.scss'],
})
export class ContactDetailsModalComponent implements OnInit {

  @Input() contact;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

}
