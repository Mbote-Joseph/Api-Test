import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Book } from 'src/app/shared/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private apiService: ApiService) {}
  getBooks() {
    this.apiService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  ngOnInit(): void {
    this.getBooks();
    console.log(this.books);
  }
}
