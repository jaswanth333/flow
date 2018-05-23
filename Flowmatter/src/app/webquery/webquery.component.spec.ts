import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebqueryComponent } from './webquery.component';

describe('WebqueryComponent', () => {
  let component: WebqueryComponent;
  let fixture: ComponentFixture<WebqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
