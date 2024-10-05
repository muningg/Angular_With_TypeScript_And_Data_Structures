import { Component } from '@angular/core';
import { CountryListService } from './country-list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: string[] = [];
  newCountry: string = '';

  constructor(private countryListService: CountryListService) { }
  
  addCountry() {
    if (this.newCountry.trim()) {
      this.countryListService.addCountry(this.newCountry);
      this.newCountry = '';
    }
  }
  provideCountrysList() {
    this.countries = this.countryListService.loadCountrys();
  }
}
