import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
 
    AddBookComponent,
 
    BooksComponent,
 
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
