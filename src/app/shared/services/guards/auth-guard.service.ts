import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router,public toastr: ToastrManager) { }

    canActivate(): boolean {
      debugger
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login']);
        console.log("falsew form auth");
        this.toastr.errorToastr('You need to Login first!!', 'Login Required!!');
        return false;
      }
      
      console.log("falsew form auth");
      return true;
  }
}
