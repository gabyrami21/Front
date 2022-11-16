import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {Editorial} from '../editorial';
import {EditorialService} from "../editorial.service";



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]=[];
  constructor(private bookService: BookService,
              private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.bookService.searchAllBooks();
    this.bookService.OnResults().subscribe(
      results => {
        this.books = results;
        this.fillBooksEditorial();
      }
    )
  }
  searchBooksByEditorial(book: Book){
    this.bookService.searchByEditorialId(book.editorialId.id)
  }

  fillBooksEditorial(){
    for (const book of this.books){
      this.editorialService.searchById(+book.editorialId).subscribe(
        result =>{
          book.editorialId = result
        }
      )
    }
  }

  deleteBookById(id: number){
    this.bookService.deleteBookById(id).subscribe(
      result => {
        console.log(result)
        this.ngOnInit()
      }
    )
  }
}
