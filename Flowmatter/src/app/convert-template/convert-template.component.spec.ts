import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertTemplateComponent } from './convert-template.component';

describe('ConvertTemplateComponent', () => {
  let component: ConvertTemplateComponent;
  let fixture: ComponentFixture<ConvertTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
