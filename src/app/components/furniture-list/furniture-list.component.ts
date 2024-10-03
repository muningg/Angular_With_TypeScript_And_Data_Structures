import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitures: string[] = ['Chair', 'Table', 'Desk', 'Bed', 'Cupboard', 'Dresser', 'Sofa', 'Armchair', 'Stool', 'Bookshelf'];
  newFurniture: string = '';

  addFurniture() {
    if (this.newFurniture.trim()) {
      this.furnitures.push(this.newFurniture);
      this.newFurniture = '';
    }
  }
}
