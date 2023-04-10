import { Component } from '@angular/core';
import { Book } from '../book';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  // booklist = Book[];
  booklist: Array<Book> = [];

  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(){

    // this.service.getBookList().subscribe(
    //   data=>{console.log("Recieved sucessfully"),
    //   this.booklist = data;
    // },
    //   error=>console.log("Exception occured")
    // )
    this.getBooks();
  }

  getBooks(){
      this.service.getBookList().subscribe(
      data=>{console.log("Recieved sucessfully"),
      this.booklist = data;
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

  // toDeleteBook(id: number){
  //   this.service.deleteBook(id).subscribe(
     
  //     data=>{ console.log("cisabci");
      
  //   },
      
  //       error=> {console.log("error occuredd");
  //       this.getBooks()}

  //   )
  // }
  toDeleteBook(id: number){
    this.service.deleteBook(id).subscribe(
     
      data=>{ console.log("Working Fine");
      this.getBooks()
      
    },
      
        error=> {console.log(error);
         this.getBooks()}
        
    )
  }


//   toDeleteBook(id: number) {
//     if (confirm('Are you sure ?'))
//   return this.service.deleteBook(id).subscribe(
//     success =>{
//       ("Product deleted succesfully");
//     },
//     error=> {console.log("Exception occured 2"); this.getBooks()}
//    )
//   }
}
