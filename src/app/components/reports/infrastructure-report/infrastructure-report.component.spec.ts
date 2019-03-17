import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureReportComponent } from './infrastructure-report.component';

describe('InfrastructureReportComponent', () => {
  let component: InfrastructureReportComponent;
  let fixture: ComponentFixture<InfrastructureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
