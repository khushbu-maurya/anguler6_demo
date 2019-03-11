import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxtableComponent } from './ngxtable.component';
import { StudentServiceService } from '../shared/services/student-service.service';
import {HttpClientModule,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Student} from '../shared/models/student';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [NgxtableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDatatableModule
  ]
})
export class NgxtableModule { }
