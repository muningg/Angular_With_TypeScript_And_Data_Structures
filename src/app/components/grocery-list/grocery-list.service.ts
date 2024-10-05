import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private groceriess: string[] = [
    'Lucky Me Instant Noodles', 'Great Taste Coffee', 'Purefoods Tender Juicy Hotdog', 'Nestle Chuckie', 'Oishi Prawn Crackers'
  ];

  loadGroceries() {
    return this.groceriess;
  }

  addGrocery(groceries: string) {
    this.groceriess.push(groceries);
  }
}
