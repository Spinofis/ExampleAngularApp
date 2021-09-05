import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationModesComponent } from './encapsulation-modes.component';

describe('EncapsulationModesComponent', () => {
  let component: EncapsulationModesComponent;
  let fixture: ComponentFixture<EncapsulationModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
