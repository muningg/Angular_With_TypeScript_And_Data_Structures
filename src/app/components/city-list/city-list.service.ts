import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  private city: string[] = [
    'Manila City',
    'Metro Manila City',
    'Makati City',
    'Cebu City'
  ];

  loadCity() {
    return this.city;
  }
  
  addCity(city: string) {
    this.city.push(city);
  }
}
