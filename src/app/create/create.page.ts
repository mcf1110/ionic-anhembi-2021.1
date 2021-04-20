import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyContact = {
    name: '',
    user: ''
  };

  constructor() { }

  ngOnInit() {
  }

  createContact() {
    console.log(this.emptyContact);
  }

}
