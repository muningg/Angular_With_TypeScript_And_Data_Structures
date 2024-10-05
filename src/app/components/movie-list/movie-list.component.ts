import { Component } from '@angular/core';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: string[] = [];
  newMovie: string = '';

  constructor(private movieListService: MovieListService) { }
  
  addMovie() {
    if (this.newMovie.trim()) {
      this.movieListService.addMovie(this.newMovie);
      this.newMovie = '';
    }
  }
  provideMoviesList() {
    this.movies = this.movieListService.loadMovies();
  }
}
