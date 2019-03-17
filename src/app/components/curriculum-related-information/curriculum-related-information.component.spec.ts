import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumRelatedInformationComponent } from './curriculum-related-information.component';

describe('CurriculumRelatedInformationComponent', () => {
  let component: CurriculumRelatedInformationComponent;
  let fixture: ComponentFixture<CurriculumRelatedInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumRelatedInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumRelatedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
