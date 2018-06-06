import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvconComponent } from './csvcon.component';

describe('CsvconComponent', () => {
  let component: CsvconComponent;
  let fixture: ComponentFixture<CsvconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
