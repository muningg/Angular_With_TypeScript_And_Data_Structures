import { Component } from '@angular/core';
import { MusicPlaylistService } from './music-playlist.service';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  songs: string[] = [];
  newSong: string = '';
  constructor(private songListService: MusicPlaylistService) { }
  
  addSong() {
    if (this.newSong.trim()) {
      this.songListService.addSong(this.newSong);
      this.newSong = '';
    }
  }
  provideSongsList() {
    this.songs = this.songListService.loadSongs();
  }
}
