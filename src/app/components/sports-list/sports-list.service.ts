import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsListService {
  private sports: string[] = [
    'Football',
    'Basketball',
    'Volleyball',
    'Tennis',
    'Badminton'
  ];

  loadSports() {
    return this.sports;
  }
  
  addSport(sport: string) {
    this.sports.push(sport);
  }
}
