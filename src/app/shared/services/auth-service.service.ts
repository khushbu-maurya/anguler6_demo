import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public toastr: ToastrManager) { }

  public isAuthenticated(): boolean {

   if (typeof localStorage !== 'undefined') {
    const userEmail = localStorage.getItem('userEmail');
      if(userEmail!=null)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }

  public logOut(){
    localStorage.clear();
    this.toastr.errorToastr('You need to Login first!!', 'Login Required!!');
    
  }
}
