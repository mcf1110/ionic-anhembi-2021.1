import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public handleSave() {
    console.log(this.newContact);
  }

}
