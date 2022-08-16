import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:8000/book';
  book: Book[] = [];

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.url);
  }

  // getBook(id) {
  //   return this.http.get(this.url + '/' + id);
  // }

  // createBook(book) {
  //   return this.http.post(this.url, book);
  // }
  // updateBook(book) {
  //   return this.http.put(this.url + '/' + book.id, book);
  // }
  // deleteBook(id) {
  //   return this.http.delete(this.url + '/' + id);
  // }

  // getBookByName(name) {
  //   return this.http.get(this.url + '/' + name);
  // }
}
