import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  private artists: string[] = [
    'Leonardo da Vinci', 'Vincent van Gogh', 'Edvard Munch', 'Michelangelo', 'Johannes Vermeer', 'Sandro Botticelli', 'Pablo Picasso', 'Paul Gauguin', 'Gustav Klimt', 'Egon Schiele'
  ];

  loadArtists() {
    return this.artists;
  }

  addArtist(artist: string) {
    this.artists.push(artist);
  }
}
