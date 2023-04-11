import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  

  constructor(private route:Router){
    
  }

  toBookList(){
    this.route.navigate(['/book-list']);
  }

  toAllBooks(){
    this.route.navigate(['/allbooks']);
  }

  toAddBook(){
    this.route.navigate(['add-book'])
  }

  toLogIn(){
    this.route.navigate(['']);
  }



}
