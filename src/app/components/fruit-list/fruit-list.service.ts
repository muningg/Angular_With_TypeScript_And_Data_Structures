import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitListService {
  private fruits: string[] = [
    'Apple',
    'Banana',
    'Mango',
    'Orange',
    'Watermelon',
    'Grape',
    'Strawberry',
    'Pineapple',
    'Cherry',
    'Peach',
    'Kiwi',
    'Blueberry',
    'Raspberry',
    'Lemon',
    'Coconut',
    'Pomegranate',
    'Guava',
    'Pear',
    'Plum',
    'Apricot',
    'Grapefruit'
  ];

  loadFruits() {
    return this.fruits;
  }
  
  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
}
