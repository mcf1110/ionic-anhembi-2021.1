import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Contact {
  name: string;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private allContacts: Contact[] = [];
  private innerStream: BehaviorSubject<Contact[]> =
    new BehaviorSubject([]);

  public allContacts$: Observable<Contact[]> =
    this.innerStream.asObservable();

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  private async loadFromStorage() {
    const contacts = await this.storage.get('contacts') as Contact[];
    this.allContacts = contacts;
    this.innerStream.next(contacts);
  }

  public findByUsername(username: string) {
    return this.allContacts$.pipe(
      map(cs => ({ ...cs.find(c => c.user === username) }))
    )
  }

  public updateByUsername(username: string, newData: Contact) {
    const currentContact = this.allContacts.find(c => c.user === username);
    currentContact.name = newData.name;
    currentContact.user = newData.user;

    this.storage.set('contacts', this.allContacts);
    this.innerStream.next([...this.allContacts]);
  }

  public addContact(newContact: Contact) {
    this.allContacts.push(newContact);
    this.storage.set('contacts', this.allContacts);
    this.innerStream.next([...this.allContacts]);
  }
}
