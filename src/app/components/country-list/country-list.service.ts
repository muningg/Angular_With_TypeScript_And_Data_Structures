import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  private countrys: string[] = [
    'Philippines', 'China', 'Japan', 'South Korea', 'Indonesia', 'Vietnam', 'Thailand', 'Malaysia', 'Singapore', 'Cambodia', 'Laos', 'Myanmar', 'Brunei', 'Taiwan'
  ];

  loadCountrys() {
    return this.countrys;
  }
  
  addCountry(country: string) {
    this.countrys.push(country);
  }
}
