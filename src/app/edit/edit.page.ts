import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  public contact: Contact;
  private username: string;

  constructor(
    route: ActivatedRoute,
    private contactService: ContactService,
    private navController: NavController
  ) {
    this.username = route.snapshot.paramMap.get('username');
    this.contact = this.contactService.findByUsername(this.username);
  }

  handleSave() {
    this.contactService.updateContact(this.username, this.contact);
    this.navController.back();
  }

}
