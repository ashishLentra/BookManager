import { Component } from '@angular/core';
import { Book } from '../book';
import { Form } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book = new Book();

  constructor(private service: ServiceService, private route:Router){};

  ngOnInit(){

  }

  addBookForm(){
    this.service.addBook(this.book).subscribe(
      data=> {this.route.navigate(['book-list']); alert("Book added Succesfully");} ,
      error=> console.log("exception occured")
    )
  }


}
