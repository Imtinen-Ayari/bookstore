import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
providedIn: 'root'
})
export class BookService {
  apiURL: string = 'http://localhost:8080/bookstore/api';

  books : Book[]; //un tableau de Book
  
  book!: Book;

constructor(private http : HttpClient) {
/*this.books = [
  {idBook : 1, nomBook : "Les misérables(modified)", prixBook : 29.890 , dateCreation : new Date("01/14/1984")},
  {idBook : 2, nomBook : "Sens and Sensibility ", prixBook : 65.700 , dateCreation : new Date("12/17/2010")},
   {idBook : 3, nomBook :"MAV", prixBook : 30.500 , dateCreation : new Date("02/20/2000")} 
]; */

  }

  

listeBook(): Observable<Book[]>{
  return this.http.get<Book[]>(this.apiURL);
}

ajouterBook( bk: Book):Observable<Book>{
  return this.http.post<Book>(this.apiURL, bk, httpOptions);
  }
/*supprimerBook( bk: Book){
  //supprimer le book prod du tableau books
  const index = this.books.indexOf(bk, 0);
  if (index > -1) {
  this.books.splice(index, 1);
  }
}*/

supprimerBook(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}







consulterBook(id: number): Observable<Book> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Book>(url);
  }


  

/*updateBook(bk:Book){
 // this.supprimerBook(bk);
  this.ajouterBook(bk);
  this.trierBooks();
}*/

updateBook(bk :Book) : Observable<Book>
{
return this.http.put<Book>(this.apiURL, bk, httpOptions);
}






trierBooks(){
  this.books = this.books.sort((n1,n2) => {
  if (n1.idBook > n2.idBook) {
  return 1;
  }
  if (n1.idBook < n2.idBook) {
  return -1;
  }
  return 0;
  });
  }

  
}
