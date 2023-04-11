import { Component } from '@angular/core';
import { Book } from '../book';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent {
  booklist: Array<Book> = [];

  constructor(private service:ServiceService, private router: Router){}

  ngOnInit(){

    this.service.getBookList().subscribe(
      data=>{console.log("Recieved sucessfully"),
      this.booklist = data;
    },
      error=>console.log("Exception occured")
    )
  }


  // toAddBook(){
  //   this.router.navigate(['/add-book']);
  // }

  // toUpdateBook(id: Number){
  //   this.router.navigate(['update-book', id])
  // }

  // toDeleteBook(id: number){
  //   this.service.deleteBook(id).subscribe(
     
  //     data=>{ console.log("cisabci");
  //     this.router.navigate(['/book-list'])},
      
  //       error=> {console.log("error occuredd")}

  //   )
  // }
      toViewBook(id: number){
        this.router.navigate(['view', id]);
      }


}
