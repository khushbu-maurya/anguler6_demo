
import { NgModule }             from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
const layoutRoutes: Routes = [{path:'header',component:HeaderComponent},{path:'footer',component:FooterComponent}];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(layoutRoutes),
      HttpClientModule
    ],
    declarations:[HeaderComponent,FooterComponent ],
    exports: [
      RouterModule,
      HeaderComponent,
      FooterComponent
    ]
  })
  export class LayoutRoutingModule { }