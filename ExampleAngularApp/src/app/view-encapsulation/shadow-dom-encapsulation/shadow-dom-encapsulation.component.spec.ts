import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';

describe('ShadowDomEncapsulationComponent', () => {
  let component: ShadowDomEncapsulationComponent;
  let fixture: ComponentFixture<ShadowDomEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDomEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
