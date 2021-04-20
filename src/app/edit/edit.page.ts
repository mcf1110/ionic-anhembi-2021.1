import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private contacts = [
    {
      name: 'Matheus',
      user: 'mcf1110'
    },
    {
      name: 'Rafaela',
      user: 'java2124'
    },
    {
      name: 'Leo',
      user: 'lele123'
    },
    {
      name: 'Augusto',
      user: 'gusmoreto'
    },
    {
      name: 'Isabella',
      user: 'IsabellaFagundes'
    },
    {
      name: 'Guilherme',
      user: 'gui-leandro'
    },
    {
      name: 'Arthur',
      user: 'aarthurssl'
    },
    {
      name: 'Matheus',
      user: 'Math-rm1'
    }
  ];

  public contact;

  constructor(route: ActivatedRoute) {
    const user = route.snapshot.paramMap.get('user');
    this.contact = this.contacts.find(c => c.user === user);
  }

  ngOnInit() {
  }

  public saveChanges() {
    console.log(this.contact);
  }

}
