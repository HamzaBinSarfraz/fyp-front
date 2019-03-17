import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuditScheduleReportComponent } from './field-audit-schedule-report.component';

describe('FieldAuditScheduleReportComponent', () => {
  let component: FieldAuditScheduleReportComponent;
  let fixture: ComponentFixture<FieldAuditScheduleReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAuditScheduleReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAuditScheduleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
