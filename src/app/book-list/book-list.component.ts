import { Component } from '@angular/core';
import { Book } from '../book';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
// import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  // booklist = Book[];
  booklist: Array<Book> = [];
  // user: User;

  constructor(private service:ServiceService, private router: Router, private userService: UserServiceService){}
  searchTable: any;
  

  ngOnInit(){  

    // this.service.getBookList().subscribe(
    //   data=>{console.log("Recieved sucessfully"),
    //   this.booklist = data;
    // },
    //   error=>console.log("Exception occured")
    // )
    this.getBooks();
    // this.getUser();
  }

  getBooks(){
    
      this.service.getBookList().subscribe(
      data=>{console.log("Recieved sucessfully"),
      this.booklist = data;
      console.log(data);
    },
      error=>console.log("Exception occured")
    )
  }

  toAddBook(){
    this.router.navigate(['/add-book']);
  }

  toUpdateBook(id: Number){
    this.router.navigate(['update-book', id])
  }

  toDeleteBook(id: number){
    this.service.deleteBook(id).subscribe(
      res=>{
        this.service.getBookList().subscribe(data=>{console.log("Recieved sucessfully"),
        this.booklist = data;
      })
      },
        error=> {console.log(error);
         })
  }

  // getUser(){
  //   this.userService.getUserList().subscribe(res=>{
  //     console.log("getUser working");

  //     this.user = res;
  //   })
  // }

}
