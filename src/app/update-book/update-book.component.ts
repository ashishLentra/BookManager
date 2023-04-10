import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  book = new Book;

  constructor(private route: Router, private service: ServiceService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let id:any = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getBookById(id).subscribe(
      data=>{this.book = data; console.log("executed");},
      error=> console.log("Error occured")
    )
  }

  updateBookForm(){
    this.service.addBook(this.book).subscribe(
      data=> this.route.navigate(['book-list']),
      error=> console.log("error occured")
    )
  }

}
