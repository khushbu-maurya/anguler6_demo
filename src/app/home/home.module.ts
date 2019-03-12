import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { StudentServiceService } from '../shared/services/student-service.service';
import {HttpClient,HttpHeaders,HttpErrorResponse,HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {FormBuilder,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule,NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    
    CommonModule,  
    HomeRoutingModule,HttpClient,
    DataTablesModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbModalModule,
    ReactiveFormsModule
  ],
  providers:[StudentServiceService,HttpClientModule]
})
export class HomeModule { }
