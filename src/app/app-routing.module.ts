import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';

import { AuthGuardService} from './shared/services/guards/auth-guard.service';
import {ContactFormComponent} from './contact-form/contact-form/contact-form.component';
const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },{path: 'contact-form',
  component: ContactFormComponent,
  canActivate: [AuthGuardService] 
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class AppRoutingModule { }
