import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  mealPlans: string[] = ['Chicken and Rice', 'Fish and Chips', 'Salad with Grilled Chicken', 'Burger and Fries', 'Soup and Sandwich'];
  newMealPlan: string = '';

  addMealPlan() {
    if (this.newMealPlan.trim()) {
      this.mealPlans.push(this.newMealPlan);
      this.newMealPlan = '';
    }
  }
}
