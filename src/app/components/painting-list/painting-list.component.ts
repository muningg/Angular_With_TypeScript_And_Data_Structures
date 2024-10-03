import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintings: string[] = ['Mona Lisa', 'The Starry Night', 'The Scream', 'The Last Supper', 'Girl with a Pearl Earring', 'The Creation of Adam', 'Guernica', 'The Night Cafe', 'The Kiss', 'Starry Night Over the Rhone'];
  newPainting: string = '';

  addPainting() {
    if (this.newPainting.trim()) {
      this.paintings.push(this.newPainting);
      this.newPainting = '';
    }
  }
}
