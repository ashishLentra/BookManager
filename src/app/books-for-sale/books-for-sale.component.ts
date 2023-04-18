import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-books-for-sale',
  templateUrl: './books-for-sale.component.html',
  styleUrls: ['./books-for-sale.component.css']
})
export class BooksForSaleComponent {
  booklist: Array<Book> = [];
  book: Book;
  forSale: boolean = true; 
  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(){

      this.getByForSale();
  }

  getByForSale(){
    this.service.getBooksByForSale(this.forSale).subscribe(
      data=>{console.log("Recieved sucessfully"),
      this.booklist = data;
    },
      error=>console.log("Exception occured")
    )
  }


  user = sessionStorage.getItem("userid");

  toViewBook(id: number){
      this.router.navigate(['view', id]);
  }

  buyBook(id: number){
      this.service.getBookById(id).subscribe(res=>{
          this.book = res;
          this.book.forSale = false;
          this.book.userId = parseInt(sessionStorage.getItem("userid"));
          this.service.updateBook(this.book).subscribe(res=>{
            this.getByForSale();
          })
      })
  }


}
