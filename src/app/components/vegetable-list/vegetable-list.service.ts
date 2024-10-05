import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetableListService {
  private vegetables: string[] = [
    'Lettuce',
    'Tomato',
    'Cucumber',
    'Carrot',
    'Cabbage'
  ];

  loadVegetables() {
    return this.vegetables;
  }
  
  addVegetable(vegetable: string) {
    this.vegetables.push(vegetable);
  }
}
