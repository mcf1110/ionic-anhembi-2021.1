import { Component } from '@angular/core';

type DeliveryStatus = 'onRoute' | 'preparing' | 'delivered' | 'finished'
interface Delivery {
  name: string;
  fastDelivery: boolean;
  estimatedDaysToDeliver: number;
  daysSinceBought: number;
  status: DeliveryStatus;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public deliveries: Delivery[] = [
    {
      name: 'TV',
      fastDelivery: true,
      estimatedDaysToDeliver: 5,
      daysSinceBought: 10,
      status: 'onRoute'
    },
    {
      name: 'Notebook',
      fastDelivery: false,
      estimatedDaysToDeliver: 7,
      daysSinceBought: 3,
      status: 'preparing'
    },
    {
      name: 'S9 Bitcoin Miner',
      fastDelivery: false,
      estimatedDaysToDeliver: 30,
      daysSinceBought: 1,
      status: 'preparing'
    },
    {
      name: 'Hi Phone',
      fastDelivery: false,
      estimatedDaysToDeliver: 50,
      daysSinceBought: 10,
      status: 'preparing'
    },
    {
      name: 'Kindle',
      fastDelivery: true,
      estimatedDaysToDeliver: 2,
      daysSinceBought: 1,
      status: 'finished'
    },
    {
      name: 'Playstation 5',
      fastDelivery: true,
      estimatedDaysToDeliver: 3,
      daysSinceBought: 3,
      status: 'finished'
    },
    {
      name: 'CADEADO GAMER',
      fastDelivery: false,
      estimatedDaysToDeliver: 23,
      daysSinceBought: 2,
      status: 'preparing'
    },
    {
      name: 'PC Gamer',
      fastDelivery: true,
      estimatedDaysToDeliver: 20,
      daysSinceBought: 5,
      status: 'delivered'
    },
    {
      name: 'PC',
      fastDelivery: true,
      estimatedDaysToDeliver: 10,
      daysSinceBought: 3,
      status: 'onRoute'
    },
    {
      name: 'Carteira',
      fastDelivery: false,
      estimatedDaysToDeliver: 10,
      daysSinceBought: 4,
      status: 'onRoute'
    },
    {
      name: 'Macaco de brinquedo',
      fastDelivery: true,
      estimatedDaysToDeliver: 2,
      daysSinceBought: 1,
      status: 'finished'
    },
  ]

  constructor() { }

}
