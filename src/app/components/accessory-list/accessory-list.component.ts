import { Component } from '@angular/core';
import { AccessoryListService } from './accessory-list.service';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessories: string[] = [];
  newAccessory: string = '';
  constructor(private accessoriesListService: AccessoryListService) { }

  addAccessory() {
    if (this.newAccessory.trim()) {
      this.accessoriesListService.addAccessories(this.newAccessory);
      this.newAccessory = '';
    }
  }
  provideAccessoriesList() {
    this.accessories = this.accessoriesListService.loadAccessories();
  }
}
