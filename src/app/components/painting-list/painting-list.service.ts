import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
  private paintings: string[] = [
    'Mona Lisa', 'The Starry Night', 'The Scream', 'The Last Supper', 'Girl with a Pearl Earring', 'The Creation of Adam', 'Guernica', 'The Night Cafe', 'The Kiss', 'Starry Night Over the Rhone'
  ];

  loadPaintings() {
    return this.paintings;
  }

  addPainting(painting: string) {
    this.paintings.push(painting);
  }
}
