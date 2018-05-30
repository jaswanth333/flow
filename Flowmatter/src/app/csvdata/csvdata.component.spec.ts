import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvdataComponent } from './csvdata.component';

describe('CsvdataComponent', () => {
  let component: CsvdataComponent;
  let fixture: ComponentFixture<CsvdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
