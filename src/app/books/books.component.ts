import { Component , OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
 selector : 'app-books',
 templateUrl: './books.component.html'
})
 

export class BooksComponent implements OnInit{

   books : Book[];
   
  constructor(private bookService : BookService,
   private router : Router){
  //   this.books = bookService.listeBooks();
    }

    ngOnInit() : void {
      this.bookService.listeBook().subscribe(bk => {
         console.log(bk);
         this.books = bk;
         });

    }
     
    supprimerBook( bk : Book)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.bookService.supprimerBook(bk.idBook).subscribe(() => {
    console.log("book deleted");
   
    this.SuprimerBookDuTableau(bk);
    });
    }

    SuprimerBookDuTableau(b : Book) {
      this.books.forEach((cur, index) => {
      if(b.idBook=== cur.idBook) {
      this.books.splice(index, 1);
      }
      });
      }



   /* supprimerBook( bk : Book){

    // console.log(bk);
    let conf = confirm("Are you sure ?");
    if (conf)
    this.bookService.supprimerBook(bk);
    }*/

  }
  