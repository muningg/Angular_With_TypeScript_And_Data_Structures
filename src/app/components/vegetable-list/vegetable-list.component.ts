import { Component } from '@angular/core';
import { VegetableListService } from './vegetable-list.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: string[] = [];
  newVegetable: string = '';
  constructor(private vegetableListService: VegetableListService) { }
  
  addVegetable() {
    if (this.newVegetable.trim()) {
      this.vegetableListService.addVegetable(this.newVegetable);
      this.newVegetable = '';
    }
  }
  provideVegetablesList() {
    this.vegetables = this.vegetableListService.loadVegetables();
  }
}
