import { Component } from '@angular/core';
import { PaintingListService } from './painting-list.service';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintings: string[] = [];
  newPainting: string = '';
  constructor(private paintingListService: PaintingListService) { }
  
  addPainting() {
    if (this.newPainting.trim()) {
      this.paintingListService.addPainting(this.newPainting);
      this.newPainting = '';
    }
  }
  providePaintingsList() {
    this.paintings = this.paintingListService.loadPaintings();
  }
}
