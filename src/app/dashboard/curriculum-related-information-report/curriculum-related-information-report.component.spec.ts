import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumRelatedInformationReportComponent } from './curriculum-related-information-report.component';

describe('CurriculumRelatedInformationReportComponent', () => {
  let component: CurriculumRelatedInformationReportComponent;
  let fixture: ComponentFixture<CurriculumRelatedInformationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumRelatedInformationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumRelatedInformationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
