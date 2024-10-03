import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  songs: string[] = ['I\'m Not Okay', 'Helena', 'Cancer','The Black Parade'];
  newSong: string = '';

  addSong() {
    if (this.newSong.trim()) {
      this.songs.push(this.newSong);
      this.newSong = '';
    }
  }
}
