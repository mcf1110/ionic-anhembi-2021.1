import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  public contact;
  private originalUser;

  constructor(
    route: ActivatedRoute,
    private contactService: ContactService,
    private navCtrl: NavController
  ) {
    this.originalUser = route.snapshot.paramMap.get('user');
    this.contact = contactService.findByUsername(this.originalUser);
  }

  public saveChanges() {
    this.contactService.updateByUsername(this.originalUser, this.contact);
    this.navCtrl.back();
  }

}
