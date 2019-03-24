import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingPolicyComponent } from './grading-policy.component';

describe('GradingPolicyComponent', () => {
  let component: GradingPolicyComponent;
  let fixture: ComponentFixture<GradingPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
