import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessories: string[] = ['Power Bank', 'Earbuds', 'Mobile Case', 'Screen Protector', 'Memory Card', 'Portable Charger', 'Headphones', 'Wireless Speaker', 'Tempered Glass', 'Pop Socket'];
  newAccessory: string = '';

  addAccessory() {
    if (this.newAccessory.trim()) {
      this.accessories.push(this.newAccessory);
      this.newAccessory = '';
    }
  }
}
