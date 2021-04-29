import { Component, OnInit } from '@angular/core';
import { Contact } from '../home/home.page'

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

  constructor() { }

  addNewContact() {
    console.log('Salvando', this.newContact);
  }

}
