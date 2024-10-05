import { Component } from '@angular/core';
import { CarModelListService } from './car-model-list.service';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModels: string[] = [];
  newCarModel: string = '';

  constructor(private carListService: CarModelListService) { }
  
  addCarModel() {
    if (this.newCarModel.trim()) {
      this.carListService.addCar(this.newCarModel);
      this.newCarModel = '';
    }
  }
  provideCarsList() {
    this.carModels = this.carListService.loadCars();
  }
}
