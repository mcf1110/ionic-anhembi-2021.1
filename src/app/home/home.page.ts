import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cities = this.cityService.cities;

  constructor(private alertController: AlertController, private cityService: CityService) { }

  public async confirmRemove(id: number, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    const alert = await this.alertController.create({
      header: 'Tem certeza que deseja remover?',
      buttons: [
        {
          text: 'Manter',
          role: 'cancel',
        }, {
          text: 'Remover',
          handler: () => {
            this.remove(id);
          }
        }
      ]
    });
    await alert.present();
  }

  private remove(id: number) {
    this.cityService.remove(id);
  }

}
