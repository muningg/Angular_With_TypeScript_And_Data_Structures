import { Component } from '@angular/core';
import { CityListService } from './city-list.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  city: string[] = [];
  newCity: string = '';

  constructor(private cityListService: CityListService) { }
  
  addCity() {
    if (this.newCity.trim()) {
      this.cityListService.addCity(this.newCity);
      this.newCity = '';
    }
  }
  provideCityList() {
    this.city = this.cityListService.loadCity();
  }
}
