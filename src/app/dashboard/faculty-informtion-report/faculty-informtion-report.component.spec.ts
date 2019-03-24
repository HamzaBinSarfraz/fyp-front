import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyInformtionReportComponent } from './faculty-informtion-report.component';

describe('FacultyInformtionReportComponent', () => {
  let component: FacultyInformtionReportComponent;
  let fixture: ComponentFixture<FacultyInformtionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyInformtionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyInformtionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
