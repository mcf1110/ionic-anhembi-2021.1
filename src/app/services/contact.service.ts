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

  public contacts: Contact[] = [];


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
    }
  }

  private saveAtStorage() {
    this.storage.set('contacts', this.contacts);
  }
}
