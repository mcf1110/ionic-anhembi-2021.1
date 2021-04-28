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
      name: 'Munizera',
      user: 'MatheusMunizera'
    },
    {
      name: 'Renalt',
      user: 'zerklly'
    },
    {
      name: 'Laura',
      user: 'Laurokah'
    },
    {
      name: 'Luiz',
      user: 'louizlv'

    }, {
      name: 'Lucas',
      user: 'LucasFreire1'
    }, {
      name: 'Jonathan',
      user: 'JonathanFerreira10'
    },
  ];

  public contact;

  constructor(route: ActivatedRoute) {
    const username = route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.user === username);
  }

  ngOnInit() {
  }

  handleSave() {
    console.log('Atualizando', this.contact);
  }

}
