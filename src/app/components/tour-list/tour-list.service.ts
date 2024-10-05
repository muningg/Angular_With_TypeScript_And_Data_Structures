import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourListService {
  private tours: string[] = [
    'Chocolate Hills', 'Mayon Volcano', 'Tubbataha Reef National Park', 'Banaue Rice Terraces', 'Pagsanjan Falls', 'Vigan', 'Intramuros', 'Corregidor', 'Fort Santiago', 'Taal Volcano'
  ];

  loadTours() {
    return this.tours;
  }

  addTour(tour: string) {
    this.tours.push(tour);
  }
}
