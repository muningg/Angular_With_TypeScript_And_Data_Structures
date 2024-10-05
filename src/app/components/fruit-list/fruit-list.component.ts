import { Component } from '@angular/core';
import { FruitListService } from './fruit-list.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: string[] = [];
  newFruits: string = '';
  constructor(private fruitListService: FruitListService) { }
  addFruit() {
    if (this.newFruits.trim()) {
      this.fruitListService.addFruit(this.newFruits);
      this.newFruits = '';
    }
  }
  provideFruitsList() {
    this.fruits = this.fruitListService.loadFruits();
  }
}
