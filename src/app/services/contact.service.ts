import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Contact {
  name: string;
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public allContacts: Contact[] = [];

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  private async loadFromStorage() {
    const contacts = await this.storage.get('contacts') as Contact[];
    if (contacts) {
      this.allContacts.push(...contacts);
    }
  }

  public findByUsername(username: string) {
    return { ...this.allContacts.find(c => c.user === username) };
  }

  public updateByUsername(username: string, newData: Contact) {
    const currentContact = this.allContacts.find(c => c.user === username);
    currentContact.name = newData.name;
    currentContact.user = newData.user;

    this.storage.set('contacts', this.allContacts);
  }

  public addContact(newContact: Contact) {
    this.allContacts.push(newContact);
    this.storage.set('contacts', this.allContacts);
  }
}
