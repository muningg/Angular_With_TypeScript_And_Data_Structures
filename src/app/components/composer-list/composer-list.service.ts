import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composers: string[] = [
    'Mozart', 'Beethoven', 'Bach', 'Chopin', 'Debussy', 'Ravel', 'Stravinsky', 'Shostakovich', 'Tchaikovsky', 'Brahms'
  ];

  loadComposers() {
    return this.composers;
  }

  addComposer(composer: string) {
    this.composers.push(composer);
  }
}
