import { Component } from '@angular/core';
import { FoodMenuService } from './food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  foods: string[] = [];
  newFood: string = '';
  constructor(private foodListService: FoodMenuService) { }
  
  addFood() {
    if (this.newFood.trim()) {
      this.foodListService.addFood(this.newFood);
      this.newFood = '';
    }
  }
  provideFoodsList() {
    this.foods = this.foodListService.loadFoods();
  }
}
