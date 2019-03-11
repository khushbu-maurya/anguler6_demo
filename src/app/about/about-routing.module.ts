
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreBookComponent } from './more-book/more-book.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { AboutBookComponent } from './about-book/about-book.component';


const aboutRoutes: Routes = [{path:'about-author',component:AboutAuthorComponent},{path:'more-book',component:MoreBookComponent},{path:'about-book',component:AboutBookComponent}];

@NgModule({
    imports: [
      RouterModule.forChild(aboutRoutes)
    ],
 
    declarations: [AboutAuthorComponent, AboutBookComponent, MoreBookComponent],
    exports: [
      RouterModule,AboutAuthorComponent,AboutBookComponent,MoreBookComponent
    ]
  })
  export class AboutRoutingModule { }