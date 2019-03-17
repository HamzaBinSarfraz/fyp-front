import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingPolicyReportComponent } from './grading-policy-report.component';

describe('GradingPolicyReportComponent', () => {
  let component: GradingPolicyReportComponent;
  let fixture: ComponentFixture<GradingPolicyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingPolicyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingPolicyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
