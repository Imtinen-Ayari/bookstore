import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
{path: "books", component :BooksComponent },
{path: "add-book", component :AddBookComponent },
{path: "updateBook/:id", component: UpdateBookComponent},
{ path: "", redirectTo: "books", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
