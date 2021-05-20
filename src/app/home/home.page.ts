import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { Contact, ContactService } from '../services/contact.service';

import { map, tap } from 'rxjs/operators'

function ordenarListaDeContatos(cs: Contact[]): Contact[] {
  return [...cs].sort((c1, c2) => c1.name.localeCompare(c2.name))
}


function realizarBusca(v: [Contact[], string]): Contact[] {
  const [cs, search] = v;
  return cs.filter(c => c.name.includes(search));
}



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contactStream: Observable<Contact[]>;
  public search = '';
  public searchStream = new BehaviorSubject('');

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private contactService: ContactService
  ) {
    this.contactStream = combineLatest([
      this.contactService.contactStream,
      this.searchStream
    ]).pipe(
      map(realizarBusca),
      map(ordenarListaDeContatos),
    )
  }

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

  public updateSearch() {
    this.searchStream.next(this.search);
  }

}
