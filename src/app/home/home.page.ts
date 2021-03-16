import { Component } from '@angular/core';

type DeliveryStatus = 'finished' | 'preparing' | 'onRoute' | 'delivered';

interface Delivery {
  name: string;
  status: DeliveryStatus;
  sedex: boolean;
  daysSinceBought: number;
  estimatedDaysToDeliver: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public deliveries: Delivery[] = [
    {
      name: "TV",
      status: "finished",
      sedex: true,
      daysSinceBought: 15,
      estimatedDaysToDeliver: 14
    }, {
      name: 'Smartphone',
      status: 'preparing',
      sedex: false,
      daysSinceBought: 20,
      estimatedDaysToDeliver: 22
    }
  ]

  constructor() { }

}
