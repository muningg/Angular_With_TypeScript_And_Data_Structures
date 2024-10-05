import { Component } from '@angular/core';
import { MealPlanListService } from './meal-plan-list.service';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  mealPlans: string[] = [];
  newMealPlan: string = '';
  constructor(private mealplanListService: MealPlanListService) { }
  
  addMealPlan() {
    if (this.newMealPlan.trim()) {
      this.mealplanListService.addMealPlan(this.newMealPlan);
      this.newMealPlan = '';
    }
  }
  provideMealPlansList() {
    this.mealPlans = this.mealplanListService.loadMealPlans();
  }
}
