import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user:User=new User();
    arr:User[]=[];
    id:number=-1;
    constructor(private route:Router,private service:UserServiceService){}

    Login()
    {
      this.service.getUserList().subscribe(res=>{
        this.arr=res;
        console.log(this.arr);

        for(let i=0;i<this.arr.length;i++)
        {
          if(this.arr[i].email===this.user.email && this.arr[i].password===this.user.password)
          {
            sessionStorage.setItem('useremail',this.arr[i].email);
            sessionStorage.setItem('userid',this.arr[i].id.toString());
            sessionStorage.setItem('token', this.arr[i].id.toString());
            console.log(sessionStorage);
            this.id=this.arr[i].id;
            this.route.navigate(['book-list',this.id]);
            return;
          }
        }
        alert("User not found or Incorrect credentials");
      })
    }

    toSignUp(){
      this.route.navigate(['signup']);
    }

}


