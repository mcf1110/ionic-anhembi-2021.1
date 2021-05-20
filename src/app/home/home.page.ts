import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { ContactService } from '../services/contact.service';
import { map } from 'rxjs/operators'
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private searchStream = new BehaviorSubject("");
  public contactStream =
    combineLatest([
      this.contactService.contactStream,
      this.searchStream
    ]).pipe(
      map(([cs, search]) => cs
        .filter(c => c.name.includes(search))
        .sort(
          (a, b) => a.name.localeCompare(b.name)
        )
      )
    )


  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {
    // setTimeout(() => {
    //   this.contacts = [...this.contactService.contacts].sort(
    //     (a, b) => a.name.localeCompare(b.name)
    //   );
    // }, 200)
  }

  public async openModal(c) {
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
        contact: c
      }
    });
    modal.present();
  }

  public updateSearchStream(event: CustomEvent) {
    this.searchStream.next(event.detail.value)
  }

}
