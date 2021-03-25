import { Component } from '@angular/core';

type Unit = 'bit' | 'byte' | 'kilobit' | 'kilobyte' | 'megabit' | 'megabyte' | 'gigabit' | 'gigabyte' | 'terabit' | 'terabyte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public inputValue: number;
  public inputType: Unit;
  public outputValue: number;
  public outputType: Unit;

  private unitToBit = {
    bit: 1,
    byte: 8,
    kilobit: 1024,
    kilobyte: 1024 * 8,
    megabit: 1024 ** 2,
    megabyte: 1024 ** 2 * 8,
    gigabit: 1024 ** 3,
    gigabyte: 1024 ** 3 * 8,
    terabit: 1024 ** 4,
    terabyte: 1024 ** 4 * 8,
  };

  public calculateOutput() {
    const bits = this.inputValue * this.unitToBit[this.inputType];
    this.outputValue = bits / this.unitToBit[this.outputType];
  }

}
