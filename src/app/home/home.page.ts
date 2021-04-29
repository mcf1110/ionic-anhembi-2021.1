import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';

export interface Contact {
  name: string;
  user: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts: Contact[] = [
    { name: 'Matheus', user: 'mcf1110' },
    { name: 'Carolina', user: 'sushiland' },
    { name: 'Karine', user: 'kaf135' },
    { name: 'João Pedro', user: 'jpssantiago' },
    { name: 'Beatriz', user: 'BeatrizMarcos' },
    { name: 'Luiz', user: 'luizreisn' },
    { name: 'Luccas', user: 'itsLuccas' },
    { name: 'Nícolas', user: 'NicolasRMarques' },
    { name: 'Leonardo Ap', user: 'LeonardoAp96' },
    { name: 'Sophia', user: 'sophiafmartins' },
    { name: 'Pedro', user: 'PedroCastro-UAM' },
  ];

  constructor(private modalController: ModalController, private routerOutlet: IonRouterOutlet) { }

  public async openModal(selectedContact: Contact) {
    const modal = await this.modalController.create({
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      component: DetailsModalComponent,
      componentProps: {
        contact: selectedContact
      }
    });
    modal.present();
  }

}
