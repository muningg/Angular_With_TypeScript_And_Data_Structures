import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private games: string[] = [
    'The Legend of Zelda', 'God of War', 'Uncharted', 'Resident Evil', 'Final Fantasy', 'Grand Theft Auto', 'Call of Duty', 'Assassins Creed', 'Halo', 'Diablo'
  ];

  loadGames() {
    return this.games;
  }

  addGame(game: string) {
    this.games.push(game);
  }
}
