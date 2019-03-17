import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLogComponent } from './course-log.component';

describe('CourseLogComponent', () => {
  let component: CourseLogComponent;
  let fixture: ComponentFixture<CourseLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
