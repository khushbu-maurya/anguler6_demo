import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from './about-routing.module';
import { MoreBookComponent } from './more-book/more-book.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { AboutBookComponent } from './about-book/about-book.component';

@NgModule({
  declarations: [AboutAuthorComponent, AboutBookComponent, MoreBookComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports:[MoreBookComponent,AboutAuthorComponent,AboutBookComponent]
})
export class AboutModule { }
