import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetListService {
  private budgets: string[] = [
    'Computer : 1M', 'Hosting:15000', 'Domain:15000', 'Software: 1M', 'Training:1M'
  ];

  loadBudgets() {
    return this.budgets;
  }

  addBudget(budget: string) {
    this.budgets.push(budget);
  }
}
