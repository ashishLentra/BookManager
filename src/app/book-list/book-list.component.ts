import { Component } from '@angular/core';
import { Book } from '../book';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UserServiceService } from '../user-service.service';
// import { User } from '../user';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {


  booklist: Array<Book> = [];
  book: Book=new Book();
  userId:number;
  searchTable: any;

  

  constructor(private service:ServiceService, private router: Router, private userService: UserServiceService,private route:ActivatedRoute){}
  
  

  ngOnInit(){  

    this.userId=this.route.snapshot.params['id'];
    
    this.getBooks();
  
  }

  getBooks(){
    
      this.service.getBooksByUserId(this.userId).subscribe(
      data=>{console.log("Recieved sucessfully"),
      this.booklist = data;
      // console.log(data);
    },
      error=>console.log("Exception occured")
    )
  }

  toAddBook(){
    this.router.navigate(['/add-book',this.userId]);
  }

  toUpdateBook(id: Number){
    this.router.navigate(['update-book', id])
  }

  

  toSellBook(id: number){
    alert("Book listed for sale!");
    this.book.id = id;
    this.service.getBookById(this.book.id).subscribe(res=>{
      this.book = res;
      this.book.forSale = true;
      this.service.updateBook(this.book).subscribe(res=>{
        this.getBooks();
        // this.router.navigate(['book-list', this.book.userId])
        
      })
    })
    // console.log(this.book.id);
  }




  toDeleteBook(id: number){
    this.service.deleteBook(id).subscribe(
      res=>{
        this.service.getBooksByUserId(this.userId).subscribe(data=>{console.log("Recieved sucessfully"),
        this.booklist = data;
      })
      },
        error=> {console.log(error);
         })
  }



}
