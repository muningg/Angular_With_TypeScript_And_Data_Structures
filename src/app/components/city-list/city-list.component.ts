import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  city: string[] = ['Manila City',"Metro Manila City","Makati City","Cebu City"];
  newCity: string = '';

  addCity() {
    if (this.newCity.trim()) {
      this.city.push(this.newCity);
      this.newCity = '';
    }
  }
}
