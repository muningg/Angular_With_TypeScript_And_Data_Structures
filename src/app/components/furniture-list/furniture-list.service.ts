import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurnitureListService {
  private furnitures: string[] = [
    'Chair', 'Table', 'Desk', 'Bed', 'Cupboard', 'Dresser', 'Sofa', 'Armchair', 'Stool', 'Bookshelf'
  ];

  loadFurnitures() {
    return this.furnitures;
  }

  addFurniture(furniture: string) {
    this.furnitures.push(furniture);
  }
}
