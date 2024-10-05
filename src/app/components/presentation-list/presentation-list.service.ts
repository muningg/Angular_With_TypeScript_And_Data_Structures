import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
  private presentations: string[] = [
    'Data Structure and Algorithm', 'Finance', 'Software Engineering', 'Artificial Intelligence', 'Internet of Things'
  ];

  loadPresentations() {
    return this.presentations;
  }

  addPresentation(presentation: string) {
    this.presentations.push(presentation);
  }
}
