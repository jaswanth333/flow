import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsvtwoComponent } from './nsvtwo.component';

describe('NsvtwoComponent', () => {
  let component: NsvtwoComponent;
  let fixture: ComponentFixture<NsvtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsvtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsvtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
