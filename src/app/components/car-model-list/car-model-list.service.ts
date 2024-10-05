import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarModelListService {

  private cars: string[] = [
    'Toyota Corolla',
    'Ford F-150',
    'Honda Civic',
    'Nissan Altima',
    'Chevrolet Silverado'
  ];

  loadCars() {
    return this.cars;
  }
  
  addCar(car: string) {
    this.cars.push(car);
  }
}
