import { Component } from '@angular/core';
import { PresentationListService } from './presentation-list.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentations: string[] = [];
  newPresentation: string = '';
  constructor(private presentationListService: PresentationListService) { }
  
  addPresentation() {
    if (this.newPresentation.trim()) {
      this.presentationListService.addPresentation(this.newPresentation);
      this.newPresentation = '';
    }
  }
  providePresentationsList() {
    this.presentations = this.presentationListService.loadPresentations();
  }

}
