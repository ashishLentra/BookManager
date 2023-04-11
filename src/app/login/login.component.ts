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
    constructor(private route:Router,private service:UserServiceService){}

    handleLogin()
    {
      this.service.getUserList().subscribe(res=>{
        this.arr=res;
        console.log(this.arr);

        for(let i=0;i<this.arr.length;i++)
        {
          if(this.arr[i].email===this.user.email && this.arr[i].password===this.user.password)
          {
            sessionStorage.setItem('useremail',this.arr[i].email);
            // sessionStorage.setItem("lastname", "Smith");
            this.route.navigate(['book-list']);
            return;
          }
        }
        alert("User not found or wrong credentials");
      })
    }

    toSignUp(){
      this.route.navigate(['signup']);
    }

}


