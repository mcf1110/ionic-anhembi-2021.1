import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  public newContact: Contact = {
    name: '',
    user: ''
  };

  constructor(
    private contactService: ContactService,
    private navController: NavController
  ) { }

  addNewContact() {
    this.contactService.addContact(this.newContact);
    this.navController.back();
  }

}
