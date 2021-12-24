import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSelectorsComponent } from './special-selectors.component';

describe('SpecialSelectorsComponent', () => {
  let component: SpecialSelectorsComponent;
  let fixture: ComponentFixture<SpecialSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
