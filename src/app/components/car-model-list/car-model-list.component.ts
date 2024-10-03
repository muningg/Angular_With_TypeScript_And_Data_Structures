import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModels: string[] = ['Toyota Corolla', 'Ford F-150', 'Honda Civic', 'Nissan Altima', 'Chevrolet Silverado'];
  newCarModel: string = '';

  addCarModel() {
    if (this.newCarModel.trim()) {
      this.carModels.push(this.newCarModel);
      this.newCarModel = '';
    }
  }
}
