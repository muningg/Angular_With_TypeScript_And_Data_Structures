import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  foods: string[] = ['Burger', 'Pizza', 'Sushi', 'Shawarma', 'Fries'];
  newFood: string = '';

  addFood() {
    if (this.newFood.trim()) {
      this.foods.push(this.newFood);
      this.newFood = '';
    }
  }
}
