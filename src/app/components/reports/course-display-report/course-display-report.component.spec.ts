import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDisplayReportComponent } from './course-display-report.component';

describe('CourseDisplayReportComponent', () => {
  let component: CourseDisplayReportComponent;
  let fixture: ComponentFixture<CourseDisplayReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDisplayReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDisplayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
