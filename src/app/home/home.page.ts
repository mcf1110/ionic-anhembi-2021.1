import { Component } from '@angular/core';

interface UnitToBit {
  bit: number;
  byte: number;
  kilobit: number;
  kilobyte: number;
  megabit: number;
  megabyte: number;
  gigabit: number;
  gigabyte: number;
  terabit: number;
  terabyte: number;
}

type ConvertionType = '' | keyof UnitToBit;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private unitToBit: UnitToBit = {
    'bit': 1,
    'byte': 8,
    'kilobit': 1024 ** 2,
    'kilobyte': 8 * 1024 ** 2,
    'megabit': 1024 ** 3,
    'megabyte': 8 * 1024 ** 3,
    'gigabit': 1024 ** 4,
    'gigabyte': 8 * 1024 ** 4,
    'terabit': 1024 ** 5,
    'terabyte': 8 * 1024 ** 5,
  }

  public input = 0;
  public inputType: ConvertionType = "";

  public output = 0;
  public outputType: ConvertionType = "";

  private calculateOutput() {
    return this.input * this.unitToBit[this.inputType] / this.unitToBit[this.outputType];
  }

  public updateOutput() {
    this.output = this.calculateOutput() || 0;
  }

  public swap() {
    this.input = this.calculateOutput();
    const tempType = this.outputType;
    this.outputType = this.inputType;
    this.inputType = tempType;
  }

  constructor() { }

}
