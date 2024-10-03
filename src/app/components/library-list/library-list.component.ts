import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries = ['React', 'Angular', 'Vue', 'Ember', 'Backbone', 'Bootstrap', 'FontAwesome', 'TypeScript', 'SASS', 'Angular CLI', 'Angular Material'];
  newLibrary = '';

  addLibrary() {
    if (this.newLibrary) {
      this.libraries.push(this.newLibrary);
      this.newLibrary = '';
    }
  }
}
