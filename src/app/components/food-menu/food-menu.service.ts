import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  private foods: string[] = [
    'Burger', 'Pizza', 'Sushi', 'Shawarma', 'Fries'
  ];

  loadFoods() {
    return this.foods;
  }

  addFood(food: string) {
    this.foods.push(food);
  }
}
