import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FeatureRoutingModule} from './features/features-routing.module';
import {ContactFormRoutingModule} from './contact-form/contact-form-routing.module';
import {BuyNowRoutingModule} from './buy-now/buy-now-routing.module';
import {ForumRoutingModule} from './forum/forum-routing.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {PreviewRoutingModule} from './preview/preview-routing.module';
import {TestimonialRoutingModule} from './testimonial/testimonial-routing.module';
import {LayoutRoutingModule} from './layout/layout-routing.module';
import {AboutRoutingModule} from './about/about-routing.module';
import {NgxtableRoutingModule} from './ngxtable/ngxtable-routing.module';
import { AppComponent } from './app.component';
import {SessionRoutingModule} from './session/session-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { StudentServiceService } from './shared/services/student-service.service';
import {FormBuilder,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Ng2SmarttableRoutingModule} from './ng2smarttable/ng2smarttable-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgbModule,NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService as AuthGuard } from './shared/services/guards/auth-guard.service';
import { AuthServiceService } from './shared/services/auth-service.service';
import { ExportAsModule } from 'ngx-export-as';
import { ToastrModule } from 'ng6-toastr-notifications';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule,
    ContactFormRoutingModule,
    AboutRoutingModule,
    BuyNowRoutingModule,
    ForumRoutingModule,
    HomeRoutingModule,
    PreviewRoutingModule,
    TestimonialRoutingModule,
    SessionRoutingModule,
    LayoutRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxtableRoutingModule,
    NgbModule.forRoot(),
    NgbModalModule,NgxDatatableModule,
    Ng2SmarttableRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ExportAsModule
  ],
  exports:[LayoutRoutingModule,AboutRoutingModule,SessionRoutingModule],

  bootstrap: [AppComponent],
  providers:[StudentServiceService,AuthGuard,AuthServiceService,HttpClientModule,ToastrModule]
})
export class AppModule { }
