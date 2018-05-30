import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelHomeComponent } from './excel-home.component';

describe('ExcelHomeComponent', () => {
  let component: ExcelHomeComponent;
  let fixture: ComponentFixture<ExcelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
