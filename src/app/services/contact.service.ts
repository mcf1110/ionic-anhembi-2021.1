import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

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


  public addContact(contact: Contact) {
    this.contacts.push(contact);
    this.saveAtStorage();
  }

  public findByUsername(username: string): Contact {
    return { ...this.contacts.find(c => c.user === username) };
  }

  public updateContact(oldUsername: string, contact: Contact) {
    const index = this.contacts.findIndex(c => c.user === oldUsername);
    this.contacts[index] = contact;
    this.saveAtStorage();
  }

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  private async loadFromStorage() {
    const storedContacts = await this.storage.get('contacts') as Contact[];
    if (storedContacts) {
      this.contacts.push(...storedContacts);
      this.contactSubject.next([...this.contacts]);
    }
  }

  private saveAtStorage() {
    this.storage.set('contacts', this.contacts);
    this.contactSubject.next([...this.contacts]);
  }
}
