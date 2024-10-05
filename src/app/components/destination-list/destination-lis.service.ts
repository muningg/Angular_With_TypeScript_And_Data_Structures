import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationLisService {
  private destinations: string[] = [
    'Palawan', 'Boracay', 'Cebu', 'Baguio', 'Davao', 'Puerto Princesa'
  ];

  loadDestinations() {
    return this.destinations;
  }

  addDestination(destination: string) {
    this.destinations.push(destination);
  }
}
