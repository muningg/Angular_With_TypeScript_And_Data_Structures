import { Component } from '@angular/core';
import { StationeryListService } from './stationery-list.service';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryItems: string[] = [];
  newStationeryItem: string = '';

  constructor(private stationeryListService: StationeryListService) { }

  addStationeryItem() {
    if (this.newStationeryItem.trim()) {
      this.stationeryListService.addStationery(this.newStationeryItem);
      this.newStationeryItem = '';
    }
  }
  provideStationeryList() {
    this.stationeryItems = this.stationeryListService.loadStationerys();
  }
}
