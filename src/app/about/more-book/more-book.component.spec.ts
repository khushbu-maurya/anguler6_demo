import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBookComponent } from './more-book.component';

describe('MoreBookComponent', () => {
  let component: MoreBookComponent;
  let fixture: ComponentFixture<MoreBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
