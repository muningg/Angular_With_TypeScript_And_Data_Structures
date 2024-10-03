import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games: string[] = ['The Legend of Zelda', 'God of War', 'Uncharted', 'Resident Evil', 'Final Fantasy', 'Grand Theft Auto', 'Call of Duty', 'Assassins Creed', 'Halo', 'Diablo'];
  newGame: string = '';

  addGame() {
    if (this.newGame.trim()) {
      this.games.push(this.newGame);
      this.newGame = '';
    }
  }
}
