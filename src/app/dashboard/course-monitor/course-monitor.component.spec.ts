import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMonitorComponent } from './course-monitor.component';

describe('CourseMonitorComponent', () => {
  let component: CourseMonitorComponent;
  let fixture: ComponentFixture<CourseMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
