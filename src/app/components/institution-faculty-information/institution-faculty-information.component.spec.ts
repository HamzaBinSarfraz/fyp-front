import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionFacultyInformationComponent } from './institution-faculty-information.component';

describe('InstitutionFacultyInformationComponent', () => {
  let component: InstitutionFacultyInformationComponent;
  let fixture: ComponentFixture<InstitutionFacultyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionFacultyInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionFacultyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
