import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artists: string[] = ['Leonardo da Vinci', 'Vincent van Gogh', 'Edvard Munch', 'Michelangelo', 'Johannes Vermeer', 'Sandro Botticelli', 'Pablo Picasso', 'Paul Gauguin', 'Gustav Klimt', 'Egon Schiele'];
  newArtist: string = '';

  addArtist() {
    if (this.newArtist.trim()) {
      this.artists.push(this.newArtist);
      this.newArtist = '';
    }
  }

}
