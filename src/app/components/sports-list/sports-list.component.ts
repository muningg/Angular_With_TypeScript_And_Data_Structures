import { Component } from '@angular/core';
import { SportsListService } from './sports-list.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sports: string[] = [];
  newSports: string = '';
  constructor(private sportListService: SportsListService) { }
  
  addSport() {
    if (this.newSports.trim()) {
      this.sportListService.addSport(this.newSports);
      this.newSports = '';
    }
  }
  provideSportsList() {
    this.sports = this.sportListService.loadSports();
  }
}
