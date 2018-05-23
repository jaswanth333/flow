import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsvComponent } from './nsv.component';

describe('NsvComponent', () => {
  let component: NsvComponent;
  let fixture: ComponentFixture<NsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
