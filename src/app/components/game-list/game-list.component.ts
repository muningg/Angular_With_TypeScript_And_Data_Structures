import { Component } from '@angular/core';
import { GameListService } from './game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games: string[] = [];
  newGame: string = '';
  constructor(private gameListService: GameListService) { }
  
  addGame() {
    if (this.newGame.trim()) {
      this.gameListService.addGame(this.newGame);
      this.newGame = '';
    }
  }
  provideGamesList() {
    this.games = this.gameListService.loadGames();
  }
}
