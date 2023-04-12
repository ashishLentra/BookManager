import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User=new User();
  confirmPassword:string;
  constructor(private route:Router,private service:UserServiceService){}

  SignUp(){
    if(this.user.password!==this.confirmPassword)
    {
      alert("Password and confirm Password are not same");
      return;
    }
    this.service.addUser(this.user).subscribe(res=>{
      console.log("User added to database successfully");
      this.route.navigate(['']);
    },
    error=>{
      alert("Error exists");
    })
    

  }

  toLogIn(){
    this.route.navigate(['']);
  }

}
