import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuditScheduleComponent } from './field-audit-schedule.component';

describe('FieldAuditScheduleComponent', () => {
  let component: FieldAuditScheduleComponent;
  let fixture: ComponentFixture<FieldAuditScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAuditScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAuditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
