import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLogTemplateReportComponent } from './course-log-template-report.component';

describe('CourseLogTemplateReportComponent', () => {
  let component: CourseLogTemplateReportComponent;
  let fixture: ComponentFixture<CourseLogTemplateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLogTemplateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLogTemplateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
