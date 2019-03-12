import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Ng2smarttableComponent } from './ng2smarttable.component';

describe('Ng2smarttableComponent', () => {
  let component: Ng2smarttableComponent;
  let fixture: ComponentFixture<Ng2smarttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2smarttableComponent ],
      imports:[Ng2SmartTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2smarttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
