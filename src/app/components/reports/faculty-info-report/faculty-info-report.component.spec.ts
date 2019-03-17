import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyInfoReportComponent } from './faculty-info-report.component';

describe('FacultyInfoReportComponent', () => {
  let component: FacultyInfoReportComponent;
  let fixture: ComponentFixture<FacultyInfoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyInfoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyInfoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
