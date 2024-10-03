import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: string[] = ['Lettuce', 'Tomato', 'Cucumber', 'Carrot', 'Cabbage'];
  newVegetable: string = '';

  addVegetable() {
    if (this.newVegetable.trim()) {
      this.vegetables.push(this.newVegetable);
      this.newVegetable = '';
    }
  }
}
