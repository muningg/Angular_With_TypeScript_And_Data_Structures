import { Component } from '@angular/core';
import { TvShowListService } from './tv-show-list.service'; // Import the service

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  shows: { title: string; year: number }[] = [];
  newShowTitle: string = '';
  newShowYear: number = 0;

  constructor(private tvShowListService: TvShowListService) { }

  addShow() {
    if (!this.newShowTitle || !this.newShowYear) {
      return;
    }
    this.tvShowListService.addTVShow({ title: this.newShowTitle, year: this.newShowYear }); 
    this.newShowTitle = '';
    this.newShowYear = 0;
  }

  provideTVShowsList() {
    this.shows = this.tvShowListService.loadTVShows();
  }
}
