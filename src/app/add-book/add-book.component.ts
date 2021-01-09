import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {


  newBook = new Book();

  message : string;

  constructor(private bookService : BookService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookService.ajouterBook(this.newBook)
    .subscribe(bk => {
    console.log(bk);
    
    });
    


   
    this.router.navigate(['books']).then(() => {
      window.location.reload();
      });

 } }
