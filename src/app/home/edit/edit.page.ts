import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {
  private products: Product[] = [
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
  public product: Product;

  constructor(private route: ActivatedRoute) {
    const currentId = +route.snapshot.paramMap.get('id');
    this.product = this.products.find(p => p.id === currentId);
  }

  salvarDados() {
    console.log("Salvando dados", this.product);
  }

}
