import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestenvirComponent } from './testenvir.component';

describe('TestenvirComponent', () => {
  let component: TestenvirComponent;
  let fixture: ComponentFixture<TestenvirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestenvirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestenvirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
