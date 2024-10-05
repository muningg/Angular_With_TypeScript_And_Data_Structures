import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movies: string[] = ['Paranormal Activity', 'A Quiet Place', 'Annabelle'];

  loadMovies() {
    return this.movies;
  }
  
  addMovie(movie: string) {
    this.movies.push(movie);
  }
}
