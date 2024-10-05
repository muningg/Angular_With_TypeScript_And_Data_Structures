import { Component } from '@angular/core';
import { DestinationLisService } from './destination-lis.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations: string[] = [];
  newDestination: string = '';
  constructor(private destinationListService: DestinationLisService) { }

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinationListService.addDestination(this.newDestination);
      this.newDestination = '';
    }
  }
  provideDestinationsList() {
    this.destinations = this.destinationListService.loadDestinations();
  }
}
