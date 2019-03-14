
import { NgModule }             from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import {NgbModule,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactFormComponent} from '../contact-form/contact-form/contact-form.component';
import { ExportAsModule } from 'ngx-export-as';
import { ToastrModule } from 'ng6-toastr-notifications';
const homeRoutes: Routes = [{path:'home',component:HomeComponent},{ 
  path: 'contact-form',
  component: ContactFormComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(homeRoutes),
      CommonModule,
      DataTablesModule,
      FormsModule,
      NgbModule.forRoot(),
      ExportAsModule,
      ToastrModule
    ],
    declarations:[HomeComponent],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule { }