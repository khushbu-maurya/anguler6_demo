
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturesComponent} from './features/features.component';

const featureRoutes: Routes = [{path:'features',component:FeaturesComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(featureRoutes)
    ],
    declarations:[FeaturesComponent ],
    exports: [
      RouterModule
    ]
  })
  export class FeatureRoutingModule { }