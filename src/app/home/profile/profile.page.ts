import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public nCols: 3 | 1 = 3;

  public posts = [
    {
      id: 99,
      liked: false,
      user: 'luizreisn',
      description: 'Legenda',
    }, {
      id: 15,
      liked: false,
      user: 'luizreisn',
      description: 'Sempre em contato com a natureza!',
    }, {
      id: 80,
      liked: true,
      user: 'luizreisn',
      description: 'dei like na propria foto',
    },
    {
      id: 33,
      liked: false,
      user: 'luizreisn',
      description: 'Isso ai mesmo',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
