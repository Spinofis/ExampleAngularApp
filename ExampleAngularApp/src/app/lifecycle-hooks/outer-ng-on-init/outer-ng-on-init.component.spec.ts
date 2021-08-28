import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterNgOnInitComponent } from './outer-ng-on-init.component';

describe('OuterNgOnInitComponent', () => {
  let component: OuterNgOnInitComponent;
  let fixture: ComponentFixture<OuterNgOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterNgOnInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterNgOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
