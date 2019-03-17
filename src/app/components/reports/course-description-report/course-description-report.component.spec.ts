import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescriptionReportComponent } from './course-description-report.component';

describe('CourseDescriptionReportComponent', () => {
  let component: CourseDescriptionReportComponent;
  let fixture: ComponentFixture<CourseDescriptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDescriptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
