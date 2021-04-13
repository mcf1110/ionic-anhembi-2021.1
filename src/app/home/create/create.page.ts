import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public newProduct = {
    name: '',
    price: 0
  };

  constructor() { }

  ngOnInit() {
  }

  public criarProduto() {
    console.log('Criando produto', this.newProduct);
  }

}
