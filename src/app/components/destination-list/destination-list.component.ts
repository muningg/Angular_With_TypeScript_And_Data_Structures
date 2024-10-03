import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations: string[] = ['Palawan', 'Boracay', 'Cebu', 'Baguio', 'Davao', 'Puerto Princesa'];
  newDestination: string = '';

  addDestination() {
    if (this.newDestination.trim()) {
      this.destinations.push(this.newDestination);
      this.newDestination = '';
    }
  }
}
