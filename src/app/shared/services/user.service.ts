import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

import { map,catchError } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient,private _api : ApiService) {
  }

  _user:User;
  LoginUser(user:User){
    this._user=new User();
   
    this._user.email=user.email;
    this._user.password=user.password;
    

    console.log(this._user);
    return this.http.post<User>(this._api.loginUser, this._user);
 
  }
}
