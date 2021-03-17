import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private typeToBit = {
    'bit': 1,
    'byte': 8,
    'kilobit': 1024,
    'kilobyte': 8 * 1024,
    'megabit': 1024 ** 2,
    'megabyte': 8 * 1024 ** 2,
    'gigabit': 1024 ** 3,
    'gigabyte': 8 * 1024 ** 3,
    'terabit': 1024 ** 4,
    'terabyte': 8 * 1024 ** 4,
  }

  public input = {
    value: 0,
    type: ''
  };
  public output = {
    value: 0,
    type: ''
  };

  private calculateOutput() {
    return this.input.value * this.typeToBit[this.input.type] / this.typeToBit[this.output.type]
  }

  public updateOutput() {
    if (!this.input.type || !this.output.type) {
      return;
    }
    this.output.value = this.calculateOutput();
  }

  public swap() {
    const tmp = this.input;
    this.input = this.output;
    this.output = tmp;
  }

  constructor() { }

}
