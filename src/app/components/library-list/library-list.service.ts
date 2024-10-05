import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryListService {
  private librarys: string[] = [
    'React', 'Angular', 'Vue', 'Ember', 'Backbone', 'Bootstrap', 'FontAwesome', 'TypeScript', 'SASS', 'Angular CLI', 'Angular Material'
  ];

  loadLibrarys() {
    return this.librarys;
  }

  addLibrary(library: string) {
    this.librarys.push(library);
  }
}
