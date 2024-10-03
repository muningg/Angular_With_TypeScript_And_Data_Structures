import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  contacts: string[] = ['0901234567', '0907654321'];
  newContact: string = '';

  addContact() {
    if (this.newContact.trim()) {
      this.contacts.push(this.newContact);
      this.newContact = '';
    }
  }
}
