import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationeryListService {
  private stationerys: string[] = [
    'Pen', 'Pencil', 'Eraser', 'Glue', 'Ruler'
  ];

  loadStationerys() {
    return this.stationerys;
  }

  addStationery(stationery: string) {
    this.stationerys.push(stationery);
  }
}
