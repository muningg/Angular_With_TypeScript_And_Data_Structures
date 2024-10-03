import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: string[] = ['Paranormal Activity', 'A Quiet Place', 'Annabelle'];
  newMovie: string = '';

  addMovie() {
    if (this.newMovie.trim()) {
      this.movies.push(this.newMovie);
      this.newMovie = '';
    }
  }
}
