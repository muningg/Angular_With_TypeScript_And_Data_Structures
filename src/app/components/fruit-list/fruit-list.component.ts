import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: string[] = ['Mansanas', 'Saging', 'Rambutan'];
  newFruits: string = '';

  addFruit() {
    if (this.newFruits.trim()) {
      this.fruits.push(this.newFruits);
      this.newFruits = '';
    }
  }
}
