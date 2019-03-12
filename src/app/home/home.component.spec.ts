import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FormBuilder,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule,NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[DataTablesModule,
        HttpClientModule,
        FormsModule,
        NgbModule.forRoot(),
        NgbModalModule,
        ReactiveFormsModule],
      providers:[HttpClientModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
