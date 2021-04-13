import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products = [
    {
      id: 1,
      name: 'TV',
      price: 50
    },
    {
      id: 2,
      name: 'Sofa',
      price: 40
    },
    {
      id: 3,
      name: 'Caneca',
      price: 10
    }
  ];

  constructor() { }

}
