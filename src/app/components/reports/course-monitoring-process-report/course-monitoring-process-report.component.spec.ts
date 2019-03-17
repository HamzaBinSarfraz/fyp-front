import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMonitoringProcessReportComponent } from './course-monitoring-process-report.component';

describe('CourseMonitoringProcessReportComponent', () => {
  let component: CourseMonitoringProcessReportComponent;
  let fixture: ComponentFixture<CourseMonitoringProcessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMonitoringProcessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMonitoringProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
