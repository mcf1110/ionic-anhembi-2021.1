import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Contact {
  name: string;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [];
  private contactSubject: BehaviorSubject<Contact[]> = new BehaviorSubject([]);
  public contactStream = this.contactSubject.asObservable();

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  public addContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.saveAtStorage();
  }

  public updateContact(oldUsername: string, updatedContact: Contact) {
    const index = this.contacts.findIndex(c => c.user === oldUsername);
    this.contacts[index] = updatedContact;
    this.saveAtStorage();
  }

  public findContactByUsername(username: string) {
    return { ...this.contacts.find(c => c.user === username) };
  }

  private async loadFromStorage() {
    const loadedContacts: Contact[] | null = await this.storage.get('contacts');
    if (loadedContacts) {
      this.contacts.push(...loadedContacts);
      this.contactSubject.next([...this.contacts]);
    }
  }

  private saveAtStorage() {
    this.storage.set('contacts', this.contacts);
    this.contactSubject.next([...this.contacts]);
  }
}
