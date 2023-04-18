import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  book: Book;
  id: User;
  
  session_id = sessionStorage.getItem("userid");

  constructor(private route:Router, private activatedR: ActivatedRoute){ }

  ngOnInit(){
    // this.id = this.activatedR.snapshot.params['id']
    // console.log(this.session_id);
  }

  

  toBookList(){
    this.route.navigate(['/book-list', this.session_id]);
    console.log(this.session_id);
  }

  toAllBooks(){
    this.route.navigate(['/allbooks']);
  }

  toAddBook(){
    this.route.navigate(['add-book', this.session_id])
  }

  toLogIn(){
    sessionStorage.removeItem('useremail');
    sessionStorage.removeItem('token');
    this.route.navigate(['']);
  }
}
