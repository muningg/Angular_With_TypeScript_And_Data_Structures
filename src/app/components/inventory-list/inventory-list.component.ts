import { Component } from '@angular/core';
import { InventoryListService } from './inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryItems: string[] = [];
  newInventoryItem: string = '';
  constructor(private inventoryListService: InventoryListService) { }
  
  addInventoryItem() {
    if (this.newInventoryItem.trim()) {
      this.inventoryListService.addInventory(this.newInventoryItem);
      this.newInventoryItem = '';
    }
  }
  provideInventoryList() {
    this.inventoryItems = this.inventoryListService.loadInventorys();
  }
}
