import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: string[] = ['Mozart', 'Beethoven', 'Bach', 'Chopin', 'Debussy', 'Ravel', 'Stravinsky', 'Shostakovich', 'Tchaikovsky', 'Brahms'];
  newComposer: string = '';

  addComposer() {
    if (this.newComposer.trim()) {
      this.composers.push(this.newComposer);
      this.newComposer = '';
    }
  }
}
