import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckAppComponent } from './do-check-app.component';

describe('DoCheckAppComponent', () => {
  let component: DoCheckAppComponent;
  let fixture: ComponentFixture<DoCheckAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
