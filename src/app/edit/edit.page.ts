import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

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
  }];
  public product;

  constructor(route: ActivatedRoute) {
    const currentId = +route.snapshot.paramMap.get('id');
    this.product = this.products.find(p => p.id === currentId);
  }

  ngOnInit() {
  }

  salvarEdicoes() {
    console.log('salvando', this.product);
  }

}
