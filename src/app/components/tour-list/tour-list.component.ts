import { Component } from '@angular/core';
import { TourListService } from './tour-list.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  tours: string[] = [];
  newTour: string = '';
  constructor(private tourListService: TourListService) { }
  
  addTour() {
    if (this.newTour.trim()) {
      this.tourListService.addTour(this.newTour);
      this.newTour = '';
    }
  }
  provideToursList() {
    this.tours = this.tourListService.loadTours();
  }
}
