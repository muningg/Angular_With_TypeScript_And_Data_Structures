import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentations: string[] = ['Data Structure and Algorithm', 'Finance', 'Software Engineering', 'Artificial Intelligence', 'Internet of Things'];
  newPresentation: string = '';

  addPresentation() {
    if (this.newPresentation.trim()) {
      this.presentations.push(this.newPresentation);
      this.newPresentation = '';
    }
  }

}
