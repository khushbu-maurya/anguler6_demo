import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import {AboutRoutingModule} from './about/about-routing.module';
import {AboutModule} from './about/about.module';
import { AuthGuardService} from './shared/services/guards/auth-guard.service';
import {ContactFormComponent} from './contact-form/contact-form/contact-form.component';
const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full'},{path: 'contact-form',
  component: ContactFormComponent,
  canActivate: [AuthGuardService] 
}, {path:'about-book', loadChildren: './about/about.module#AboutModule'}];
@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,AboutRoutingModule,AboutModule],
  exports: [RouterModule],
  providers:[AuthGuardService,HttpClientModule]
})
export class AppRoutingModule { }
