
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2smarttableComponent } from './ng2smarttable.component';
import { StudentServiceService } from '../shared/services/student-service.service';
import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../shared/models/student';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const layoutRoutes: Routes = [{ path: 'ng2smarttable', component: Ng2smarttableComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes),
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [Ng2smarttableComponent],
  exports: [
    RouterModule,
    Ng2smarttableComponent,
    HttpClientModule
  ]
})
export class Ng2SmarttableRoutingModule { }