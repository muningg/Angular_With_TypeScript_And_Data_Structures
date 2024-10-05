import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowListService {
  private shows: { title: string; year: number }[] = [
    { title: 'Breaking Bad', year: 2008 },
    { title: 'Stranger Things', year: 2016 },
    { title: 'The Office', year: 2005 },
    { title: 'Game of Thrones', year: 2011 },
    { title: 'The Crown', year: 2016 },
  ];

  constructor() { }

  loadTVShows() {
    return this.shows;
  }

  addTVShow(show: { title: string; year: number }) {
    this.shows.push(show);
  }
}
