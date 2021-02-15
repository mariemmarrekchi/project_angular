import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRequirmentComponent } from './one-requirment.component';

describe('OneRequirmentComponent', () => {
  let component: OneRequirmentComponent;
  let fixture: ComponentFixture<OneRequirmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRequirmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRequirmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
