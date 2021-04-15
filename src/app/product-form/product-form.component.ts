import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input() product;
  @Output() formSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public emitirEvento() {
    this.formSubmitted.emit();
  }

}
