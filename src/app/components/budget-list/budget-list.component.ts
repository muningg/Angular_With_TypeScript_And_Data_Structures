import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  budgets: string[] = ['Computer : 1M', 'Hosting:15000', 'Domain:15000', 'Software: 1M', 'Training:1M'];
  newBudget: string = '';

  addBudget() {
    if (this.newBudget.trim()) {
      this.budgets.push(this.newBudget);
      this.newBudget = '';
    }
  }

}
