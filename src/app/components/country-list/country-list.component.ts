import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: string[] = ['Philippines', 'China', 'Japan', 'South Korea', 'Indonesia', 'Vietnam', 'Thailand', 'Malaysia', 'Singapore', 'Cambodia', 'Laos', 'Myanmar', 'Brunei', 'Taiwan'];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry.trim()) {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }
}
