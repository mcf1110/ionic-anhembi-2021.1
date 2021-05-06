import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface CurrentPrice {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

export interface Bpi {
  USD: Rate;
  GBP: Rate;
  EUR: Rate;
}

export interface Rate {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface Time {
  updated: string;
  updatedISO: Date;
  updateduk: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentPrice: CurrentPrice;
  public value = 0;

  constructor(private http: HttpClient) {
    this.loadPrices();
  }
  private async loadPrices() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    this.currentPrice = await this.http.get<CurrentPrice>(url).toPromise();
  }
}
