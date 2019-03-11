import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import {FeatureRoutingModule} from './features-routing.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeaturesModule { }
