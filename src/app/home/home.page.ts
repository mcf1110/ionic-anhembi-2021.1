import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { ContactDetailsModalComponent } from '../components/contact-details-modal/contact-details-modal.component';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts$: Observable<Contact[]>;
  public search$ = new BehaviorSubject('');

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {
    this.contacts$ = combineLatest([
      this.contactService.allContacts$,
      this.search$
    ]).pipe(
      map(([cs, search]) => cs.filter(c => c.name.includes(search))),
      map(cs => cs.sort((c1, c2) => c1.name.localeCompare(c2.name)))
    );
  }

  public async openModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsModalComponent,
      componentProps: {
        contact: contact
      }
    });
    modal.present();
  }

  public updateSearch(event: CustomEvent) {
    this.search$.next(event.detail.value);
  }

}
