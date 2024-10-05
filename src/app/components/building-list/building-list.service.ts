import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
  private buildings: string[] = [
    'Eiffel Tower', 'Burj Khalifa', 'Tokyo Tower', 'Big Ben', 'Petronas Twin Towers', 'Chrysler Building', 'Golden Gate Bridge', 'Staue of Liberty', 'Sydney Opera House', 'Philippine Building'
  ];

  loadBuildings() {
    return this.buildings;
  }

  addBuilding(building: string) {
    this.buildings.push(building);
  }
}
