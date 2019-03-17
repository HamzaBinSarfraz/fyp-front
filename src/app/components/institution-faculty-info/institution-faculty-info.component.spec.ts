import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionFacultyInfoComponent } from './institution-faculty-info.component';

describe('InstitutionFacultyInfoComponent', () => {
  let component: InstitutionFacultyInfoComponent;
  let fixture: ComponentFixture<InstitutionFacultyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionFacultyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionFacultyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
