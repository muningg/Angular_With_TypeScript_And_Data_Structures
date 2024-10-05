import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  private inventorys: string[] = [
    'Chippy', 'Lucky Me', 'Nestle Milo', 'C2', 'Cheese Curls', 'Coke'
  ];

  loadInventorys() {
    return this.inventorys;
  }
  
  addInventory(inventory: string) {
    this.inventorys.push(inventory);
  }
}
