import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinfoadminComponent } from './studentinfoadmin.component';

describe('StudentinfoadminComponent', () => {
  let component: StudentinfoadminComponent;
  let fixture: ComponentFixture<StudentinfoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentinfoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentinfoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
