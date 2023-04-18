import { Component } from '@angular/core';
import { Book } from '../book';

import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book:Book=new Book();
  constructor(private service: ServiceService, private route:Router,private router:ActivatedRoute){};


  ngOnInit(){
    console.log(this.router.snapshot.params['id'],typeof this.router.snapshot.params['id'])
    this.book.userId=this.router.snapshot.params['id'];
  }

  addBookForm(){
    console.log(this.book);
    this.service.addBook(this.book).subscribe(
      data=> {this.route.navigate(['book-list',this.book.userId]);} ,
      error=> console.log("exception occured")
    )
  }


}
