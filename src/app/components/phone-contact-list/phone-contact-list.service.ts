import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
  private contacts: string[] = [
    '0901234567', '0907654321'
  ];

  loadContacts() {
    return this.contacts;
  }

  addContact(contact: string) {
    this.contacts.push(contact);
  }
}
