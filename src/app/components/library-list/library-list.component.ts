import { Component } from '@angular/core';
import { LibraryListService } from './library-list.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries = [''];
  newLibrary = '';
  constructor(private libraryListService: LibraryListService) { }
  
  addLibrary() {
    if (this.newLibrary.trim()) {
      this.libraryListService.addLibrary(this.newLibrary);
      this.newLibrary = '';
    }
  }
  provideLibrarysList() {
    this.libraries = this.libraryListService.loadLibrarys();
  }
}
