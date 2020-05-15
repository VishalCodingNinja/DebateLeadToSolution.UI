import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InEqualityComponent } from './in-equality.component';

describe('InEqualityComponent', () => {
  let component: InEqualityComponent;
  let fixture: ComponentFixture<InEqualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InEqualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InEqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
