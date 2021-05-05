import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public newContact = {
    name: '',
    user: ''
  };

  constructor(
    private contactService: ContactService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  public handleSave() {
    this.contactService.addContact(this.newContact);
    this.navController.back();
  }

}
