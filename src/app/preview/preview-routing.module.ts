
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreviewComponent} from './preview.component';

const previewRoutes: Routes = [{path:'preview',component:PreviewComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(previewRoutes)
    ],
    declarations:[PreviewComponent ],
    exports: [
      RouterModule
    ]
  })
  export class PreviewRoutingModule { }