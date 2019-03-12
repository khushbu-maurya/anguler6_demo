import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxtableComponent } from './ngxtable.component';
import {HttpClientModule} from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
describe('NgxtableComponent', () => {
  let component: NgxtableComponent;
  let fixture: ComponentFixture<NgxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxtableComponent ],
      imports:[NgxDatatableModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
