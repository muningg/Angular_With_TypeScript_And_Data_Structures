import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceries: string[] = [];
  newGrocery: string = '';
  constructor(private groceriesListService: GroceryListService) { }

  addGrocery() {
    if (this.newGrocery.trim()) {
      this.groceriesListService.addGrocery(this.newGrocery);
      this.newGrocery = '';
    }
  }
  provideGroceriesList() {
    this.groceries = this.groceriesListService.loadGroceries();
  }
}
