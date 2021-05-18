import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { map, switchMap, tap } from 'rxjs/operators';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  public contact$;
  private originalUser;

  constructor(
    route: ActivatedRoute,
    private contactService: ContactService,
    private navCtrl: NavController
  ) {
    this.contact$ = route.paramMap.pipe(
      map(pm => pm.get('user')),
      switchMap(user => contactService.findByUsername(user))
    )
    this.originalUser = route.snapshot.paramMap.get('user');
  }

  public saveChanges(contact: Contact) {
    this.contactService.updateByUsername(this.originalUser, contact);
    this.navCtrl.back();
  }

}
