import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuditGuidelinesDRComponent } from './field-audit-guidelines-dr.component';

describe('FieldAuditGuidelinesDRComponent', () => {
  let component: FieldAuditGuidelinesDRComponent;
  let fixture: ComponentFixture<FieldAuditGuidelinesDRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAuditGuidelinesDRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAuditGuidelinesDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
