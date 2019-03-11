import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ng6-toastr-notifications';
import {FormBuilder,FormsModule} from '@angular/forms';
const sessionRoutes: Routes = [{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent}];
@NgModule({
  imports: [RouterModule.forRoot(sessionRoutes),FormsModule,BrowserAnimationsModule,ToastrModule],
  declarations:[LoginComponent,RegisterComponent],
  exports: [RouterModule,LoginComponent,RegisterComponent]
})
export class SessionRoutingModule { }
