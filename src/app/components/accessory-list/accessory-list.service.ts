import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
  private accessoriess: string[] = [
    'Power Bank', 'Earbuds', 'Mobile Case', 'Screen Protector', 'Memory Card', 'Portable Charger', 'Headphones', 'Wireless Speaker', 'Tempered Glass', 'Pop Socket'
  ];

  loadAccessories() {
    return this.accessoriess;
  }

  addAccessories(accessories: string) {
    this.accessoriess.push(accessories);
  }
}
