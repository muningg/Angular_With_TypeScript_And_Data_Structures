import { Component } from '@angular/core';
import { BudgetListService } from './budget-list.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  budgets: string[] = [];
  newBudget: string = '';
  constructor(private budgetListService: BudgetListService) { }

  addBudget() {
    if (this.newBudget.trim()) {
      this.budgetListService.addBudget(this.newBudget);
      this.newBudget = '';
    }
  }
  provideBudgetsList() {
    this.budgets = this.budgetListService.loadBudgets();
  }
}
