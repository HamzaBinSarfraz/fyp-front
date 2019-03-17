import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuditGuidelineReportComponent } from './field-audit-guideline-report.component';

describe('FieldAuditGuidelineReportComponent', () => {
  let component: FieldAuditGuidelineReportComponent;
  let fixture: ComponentFixture<FieldAuditGuidelineReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAuditGuidelineReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAuditGuidelineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
