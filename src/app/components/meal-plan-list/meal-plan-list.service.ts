import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealPlanListService {
  private mealplans: string[] = [
    'Chicken and Rice', 'Fish and Chips', 'Salad with Grilled Chicken', 'Burger and Fries', 'Soup and Sandwich'
  ];

  loadMealPlans() {
    return this.mealplans;
  }

  addMealPlan(mealplan: string) {
    this.mealplans.push(mealplan);
  }
}
