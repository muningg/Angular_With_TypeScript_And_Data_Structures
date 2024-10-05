import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  private books: string[] = [
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    'Introduction to Algorithms',
    'Structure and Interpretation of Computer Programs (SICP)'
  ];

  loadBooks() {
    return this.books;
  }
  
  addBook(book: string) {
    this.books.push(book);
  }
}
