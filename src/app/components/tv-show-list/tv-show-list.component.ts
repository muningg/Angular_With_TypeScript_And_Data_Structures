import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {
  shows: { title: string; year: number }[] = [];
  newShowTitle: string = '';
  newShowYear: number = 0;

  addShow() {
    if (!this.newShowTitle || !this.newShowYear) {
      return;
    }
    this.shows.push({ title: this.newShowTitle, year: this.newShowYear });
    this.newShowTitle = '';
    this.newShowYear = 0;
  }
}
