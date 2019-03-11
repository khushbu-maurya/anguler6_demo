
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestimonialComponent} from './testimonial.component';

const testimonialRoutes: Routes = [{path:'testimonial',component:TestimonialComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(testimonialRoutes)
    ],
    declarations:[TestimonialComponent ],
    exports: [
      RouterModule
    ]
  })
  export class TestimonialRoutingModule { }