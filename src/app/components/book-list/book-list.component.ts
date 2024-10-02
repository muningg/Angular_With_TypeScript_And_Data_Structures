import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: string[] = ['Clean Code: A Handbook of Agile Software Craftsmanship', 'Introduction to Algorithms', 'Structure and Interpretation of Computer Programs (SICP)'];
  newBooks: string = '';

  addBooks() {
    if (this.newBooks.trim()) {
      this.books.push(this.newBooks);
      this.newBooks = '';
    }
  }
}
