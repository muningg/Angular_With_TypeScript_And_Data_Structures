import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sports: string[] = ['Football', 'Basketball', 'Volleyball', 'Tennis', 'Badminton'];
  newSports: string = '';

  addSport() {
    if (this.newSports.trim()) {
      this.sports.push(this.newSports);
      this.newSports = '';
    }
  }
}
