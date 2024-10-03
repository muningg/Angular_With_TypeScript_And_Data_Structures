import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryItems: string[] = ['Pen', 'Pencil', 'Eraser', 'Glue', 'Ruler'];
  newStationeryItem: string = '';

  addStationeryItem() {
    if (this.newStationeryItem.trim()) {
      this.stationeryItems.push(this.newStationeryItem);
      this.newStationeryItem = '';
    }
  }
}
