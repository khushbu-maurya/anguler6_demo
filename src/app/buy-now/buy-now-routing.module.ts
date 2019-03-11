
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyNowComponent} from './buy-now.component';

const buyNowRoutes: Routes = [{path:'buy-now',component:BuyNowComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(buyNowRoutes)
    ],
    declarations:[BuyNowComponent ],
    exports: [
      RouterModule
    ]
  })
  export class BuyNowRoutingModule { }