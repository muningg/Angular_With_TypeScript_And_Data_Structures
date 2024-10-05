import { Component } from '@angular/core';
import { BuildingListService } from './building-list.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildings: string[] = [];
  newBuilding: string = '';
  constructor(private buildingListService: BuildingListService) { }
  
  addBuilding() {
    if (this.newBuilding.trim()) {
      this.buildingListService.addBuilding(this.newBuilding);
      this.newBuilding = '';
    }
  }
  provideBuildingsList() {
    this.buildings = this.buildingListService.loadBuildings();
  }
}
