import { Component } from '@angular/core';
import { ComposerListService } from './composer-list.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: string[] = [];
  newComposer: string = '';
  constructor(private composerListService: ComposerListService) { }

  addComposer() {
    if (this.newComposer.trim()) {
      this.composerListService.addComposer(this.newComposer);
      this.newComposer = '';
    }
  }
  provideComposersList() {
    this.composers = this.composerListService.loadComposers();
  }
}
