import { Component } from '@angular/core';
import { ArtistListService } from './artist-list.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artists: string[] = [];
  newArtist: string = '';
  constructor(private artistListService: ArtistListService) { }

  addArtist() {
    if (this.newArtist.trim()) {
      this.artistListService.addArtist(this.newArtist);
      this.newArtist = '';
    }
  }
  provideArtistsList() {
    this.artists = this.artistListService.loadArtists();
  }
}
