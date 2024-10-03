import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceries: string[] = ['Lucky Me Instant Noodles', 'Great Taste Coffee', 'Purefoods Tender Juicy Hotdog', 'Nestle Chuckie', 'Oishi Prawn Crackers'];
newGrocery: string = '';

  addGrocery() {
    if (this.newGrocery.trim()) {
      this.groceries.push(this.newGrocery);
      this.newGrocery = '';
    }
  }
}
