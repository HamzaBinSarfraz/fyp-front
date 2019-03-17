import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyInformationFIFComponent } from './faculty-information-fif.component';

describe('FacultyInformationFIFComponent', () => {
  let component: FacultyInformationFIFComponent;
  let fixture: ComponentFixture<FacultyInformationFIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyInformationFIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyInformationFIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
