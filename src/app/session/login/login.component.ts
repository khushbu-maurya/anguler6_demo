import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';

import { ToastrManager } from 'ng6-toastr-notifications';

import {User} from '../../shared/models/user'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _user:any;
  constructor(private userService: UserService,public toastr: ToastrManager,private router: Router) {
     }
  
   onLogin(form: NgForm)
   {
     console.log("login");
    this.userService.LoginUser(form.value)
    .subscribe(data => { 
      console.log(form.value);
        this._user = data; 
        if(this._user==true)
      {
        console.log("true");
        this.toastr.successToastr('You have logged in Succcessfully', 'User Login');
        console.log(form.value.email);
        localStorage.setItem("userEmail",form.value.email);
        this.router.navigateByUrl("/home");
      }
      else{

        console.log("false");
        this.toastr.errorToastr('Invalid Credentials', 'Login Failed!!');
    
      }
      });
   
      
   }

  ngOnInit() {
  }

}
