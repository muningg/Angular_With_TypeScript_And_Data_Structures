import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicPlaylistService {
  private songs: string[] = [
    'I\'m Not Okay', 'Helena', 'Cancer', 'The Black Parade'
  ];

  loadSongs() {
    return this.songs;
  }

  addSong(song: string) {
    this.songs.push(song);
  }
}
