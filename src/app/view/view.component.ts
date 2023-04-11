import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  book = new Book();
  id:number;
  constructor(private service:ServiceService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(){
      this.id= this.activatedRoute.snapshot.params['id'];
      this.service.getBookById(this.id).subscribe(res=>{
        this.book = res;
      },
      error=> console.log("Error"))

  } 
}
