import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramMonitoringProcessReportComponent } from './program-monitoring-process-report.component';

describe('ProgramMonitoringProcessReportComponent', () => {
  let component: ProgramMonitoringProcessReportComponent;
  let fixture: ComponentFixture<ProgramMonitoringProcessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramMonitoringProcessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramMonitoringProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
