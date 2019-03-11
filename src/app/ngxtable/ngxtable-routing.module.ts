
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxtableComponent } from './ngxtable.component';
import { StudentServiceService } from '../shared/services/student-service.service';
import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../shared/models/student';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
const layoutRoutes: Routes = [{ path: 'ngxtable', component: NgxtableComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes),
    NgxDatatableModule

  ],
  declarations: [NgxtableComponent],
  exports: [
    RouterModule,
    NgxtableComponent,
    HttpClientModule,
    NgxDatatableModule
  ]
})
export class NgxtableRoutingModule { }