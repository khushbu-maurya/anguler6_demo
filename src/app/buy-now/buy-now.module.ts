import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyNowComponent } from './buy-now.component';
import {BuyNowRoutingModule} from './buy-now-routing.module';
@NgModule({
  declarations: [BuyNowComponent],
  imports: [
    CommonModule,
    BuyNowRoutingModule
  ]
})
export class BuyNowModule { }
