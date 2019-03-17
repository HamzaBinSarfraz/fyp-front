import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniInfoComponent } from './alumni-info.component';

describe('AlumniInfoComponent', () => {
  let component: AlumniInfoComponent;
  let fixture: ComponentFixture<AlumniInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
