import { Component } from '@angular/core';
import { PhoneContactListService } from './phone-contact-list.service';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  contacts: string[] = [];
  newContact: string = '';
  constructor(private contactListService: PhoneContactListService) { }

  addContact() {
    if (this.newContact.trim()) {
      this.contactListService.addContact(this.newContact);
      this.newContact = '';
    }
  }
  provideContactsList() {
    this.contacts = this.contactListService.loadContacts();
  }
}
