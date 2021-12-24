import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleZippy.TemplateComponent } from './example-zippy.template.component';

describe('ExampleZippy.TemplateComponent', () => {
  let component: ExampleZippy.TemplateComponent;
  let fixture: ComponentFixture<ExampleZippy.TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleZippy.TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleZippy.TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
