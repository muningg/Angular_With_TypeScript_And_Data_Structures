import { Component } from '@angular/core';
import { BookListService } from './book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: string[] = [];
  newBooks: string = '';

  constructor(private booksListService: BookListService) { }
  
  addBook() {
    if (this.newBooks.trim()) {
      this.booksListService.addBook(this.newBooks);
      this.newBooks = '';
    }
  }
  provideBooksList() {
    this.books = this.booksListService.loadBooks();
  }
}
