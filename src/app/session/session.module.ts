import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormBuilder,FormsModule} from '@angular/forms';
import {SessionRoutingModule} from './session-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule
  ]
})
export class SessionModule { }
