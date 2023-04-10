import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getBookList(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/book');
  }
  
  addBook(book: Book):Observable<any>{
    return this.http.post<any>('http://localhost:8080/addBook', book);
  }

  getBookById(id: number){
    return this.http.get<any>('http://localhost:8080/book/'+id);
  }

  deleteBook(id: number){
     return this.http.delete<any>('http://localhost:8080/deleteBook/'+id);
  }

}
