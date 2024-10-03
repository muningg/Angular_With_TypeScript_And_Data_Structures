import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryItems: string[] = ['Chippy', 'Lucky Me', 'Nestle Milo', 'C2', 'Cheese Curls', 'Coke'];
  newInventoryItem: string = '';

  addInventoryItem() {
    if (this.newInventoryItem.trim()) {
      this.inventoryItems.push(this.newInventoryItem);
      this.newInventoryItem = '';
    }
  }

}
