import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products = [{
    id: 1,
    name: 'Espada',
    price: 15,
  },
  {
    id: 2,
    name: 'Escudo',
    price: 20
  },
  {
    id: 3,
    name: 'Poção',
    price: 5
  },
  ];

  constructor() { }

}
