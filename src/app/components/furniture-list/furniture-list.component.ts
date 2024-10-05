import { Component } from '@angular/core';
import { FurnitureListService } from './furniture-list.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitures: string[] = [];
  newFurniture: string = '';

  constructor(private furnitureListService: FurnitureListService) { }

  addFurniture() {
    if (this.newFurniture.trim()) {
      this.furnitureListService.addFurniture(this.newFurniture);
      this.newFurniture = '';
    }
  }
  provideFurnituresList() {
    this.furnitures = this.furnitureListService.loadFurnitures();
  }
}
