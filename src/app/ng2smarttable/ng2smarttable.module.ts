import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2smarttableComponent } from './ng2smarttable.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [Ng2smarttableComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
})
export class Ng2smarttableModule { }
