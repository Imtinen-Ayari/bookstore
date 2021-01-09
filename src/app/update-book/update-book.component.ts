import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  
})
export class UpdateBookComponent implements OnInit {
  currentBook = new Book();

  constructor(private activatedRoute: ActivatedRoute,
    private router : Router,
    private bookService: BookService) { }

  ngOnInit(): void {
   // console.log(this.activatedRoute.snapshot.params.id);
   
   this.bookService.consulterBook(this.activatedRoute.snapshot.params.id).
   subscribe( bk =>{ this.currentBook = bk; } ) ;
   
  }


 /* updateBook(){
  // console.log(this.currentBook);
  this.bookService.updateBook(this.currentBook);
  this.router.navigate(["books"]);
  }*/

  updateBook() {
    this.bookService.updateBook(this.currentBook).subscribe(bk => {
    this.router.navigate(['books']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    
    }




}
