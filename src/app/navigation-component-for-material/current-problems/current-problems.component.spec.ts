import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProblemsComponent } from './current-problems.component';

describe('CurrentProblemsComponent', () => {
  let component: CurrentProblemsComponent;
  let fixture: ComponentFixture<CurrentProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
