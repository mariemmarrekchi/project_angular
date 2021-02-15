import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProblemComponent } from './one-problem.component';

describe('OneProblemComponent', () => {
  let component: OneProblemComponent;
  let fixture: ComponentFixture<OneProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
