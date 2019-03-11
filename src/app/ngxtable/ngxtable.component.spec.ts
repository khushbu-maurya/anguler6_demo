import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxtableComponent } from './ngxtable.component';

describe('NgxtableComponent', () => {
  let component: NgxtableComponent;
  let fixture: ComponentFixture<NgxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxtableComponent ]
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
