import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';

describe('EmulatedEncapsulationComponent', () => {
  let component: EmulatedEncapsulationComponent;
  let fixture: ComponentFixture<EmulatedEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatedEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
