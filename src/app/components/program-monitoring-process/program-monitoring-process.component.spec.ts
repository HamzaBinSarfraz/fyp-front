import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramMonitoringProcessComponent } from './program-monitoring-process.component';

describe('ProgramMonitoringProcessComponent', () => {
  let component: ProgramMonitoringProcessComponent;
  let fixture: ComponentFixture<ProgramMonitoringProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramMonitoringProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramMonitoringProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
