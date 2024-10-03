import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildings: string[] = ['Eiffel Tower', 'Burj Khalifa', 'Tokyo Tower', 'Big Ben', 'Petronas Twin Towers', 'Chrysler Building', 'Golden Gate Bridge', 'Staue of Liberty', 'Sydney Opera House', 'Philippine Building'];
  newBuilding: string = '';

  addBuilding() {
    if (this.newBuilding.trim()) {
      this.buildings.push(this.newBuilding);
      this.newBuilding = '';
    }
  }
}
