import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  tours: string[] = ['Chocolate Hills', 'Mayon Volcano', 'Tubbataha Reef National Park', 'Banaue Rice Terraces', 'Pagsanjan Falls', 'Vigan', 'Intramuros', 'Corregidor', 'Fort Santiago', 'Taal Volcano'];
  newTour: string = '';

  addTour() {
    if (this.newTour.trim()) {
      this.tours.push(this.newTour);
      this.newTour = '';
    }
  }
}
