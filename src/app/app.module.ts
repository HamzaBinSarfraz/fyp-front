import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { StudentinfoadminComponent } from './components/studentinfoadmin/studentinfoadmin.component';
import { users } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GuardsService } from './services/guards.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { StudentreportComponent } from './components/studentreport/studentreport.component';

import { FieldAuditScheduleComponent } from './components/field-audit-schedule/field-audit-schedule.component';
import { FieldAuditGuidelinesDRComponent } from './components/field-audit-guidelines-dr/field-audit-guidelines-dr.component';
import { GradingPolicyComponent } from './components/grading-policy/grading-policy.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { ProgramMonitoringProcessComponent } from './components/program-monitoring-process/program-monitoring-process.component';
import { FinancialComponent } from './components/financial/financial.component';
import { FacultyInformationFIFComponent } from './components/faculty-information-fif/faculty-information-fif.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { CourseVisitComponent } from './components/course-visit/course-visit.component';
import { CourseMonitorComponent } from './components/course-monitor/course-monitor.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { CourseLogComponent } from './components/course-log/course-log.component';
import { FinancialReportComponent } from './components/reports/financial-report/financial-report.component';
import { FieldAuditScheduleReportComponent } from './components/reports/field-audit-schedule-report/field-audit-schedule-report.component';
import { FieldAuditGuidelineReportComponent } from './components/reports/field-audit-guideline-report/field-audit-guideline-report.component';
import { GradingPolicyReportComponent } from './components/reports/grading-policy-report/grading-policy-report.component';
import { InfrastructureReportComponent } from './components/reports/infrastructure-report/infrastructure-report.component';
import { ProgramMonitoringProcessReportComponent } from './components/reports/program-monitoring-process-report/program-monitoring-process-report.component';
import { FacultyInfoReportComponent } from './components/reports/faculty-info-report/faculty-info-report.component';
import { CourseDisplayReportComponent } from './components/reports/course-display-report/course-display-report.component';
import { CourseLogTemplateReportComponent } from './components/reports/course-log-template-report/course-log-template-report.component';
import { CourseMonitoringProcessReportComponent } from './components/reports/course-monitoring-process-report/course-monitoring-process-report.component';
import { CourseRegistrationReportComponent } from './components/reports/course-registration-report/course-registration-report.component';
import { CourseDescriptionReportComponent } from './components/reports/course-description-report/course-description-report.component';
import { CurriculumReportComponent } from './components/reports/curriculum-report/curriculum-report.component';
import { AlumniInfoComponent } from './components/alumni-info/alumni-info.component';
import { InstitutionFacultyInfoComponent } from './components/institution-faculty-info/institution-faculty-info.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { CurriculumRelatedInformationComponent } from './components/curriculum-related-information/curriculum-related-information.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PagesComponent,
    SignupComponent,
    StudentinfoadminComponent,
    StudentreportComponent,
    FieldAuditScheduleComponent,
    FieldAuditGuidelinesDRComponent,
    GradingPolicyComponent,
    InfrastructureComponent,
    ProgramMonitoringProcessComponent,
    FinancialComponent,
    FacultyInformationFIFComponent,
    FooterComponent,
    CourseManagementComponent,
    CourseVisitComponent,
    CourseMonitorComponent,
    CourseRegistrationComponent,
    CourseLogComponent,
    FinancialReportComponent,
    FieldAuditScheduleReportComponent,
    FieldAuditGuidelineReportComponent,
    GradingPolicyReportComponent,
    InfrastructureReportComponent,
    ProgramMonitoringProcessReportComponent,
    FacultyInfoReportComponent,
    CourseDisplayReportComponent,
    CourseLogTemplateReportComponent,
    CourseMonitoringProcessReportComponent,
    CourseRegistrationReportComponent,
    CourseDescriptionReportComponent,
    CurriculumReportComponent,
    AlumniInfoComponent,
    InstitutionFacultyInfoComponent,
    StudentInfoComponent,
    AdmissionComponent,
    CurriculumRelatedInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, HttpModule, ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [users, AuthService, GuardsService , ],
  bootstrap: [AppComponent]
})
export class AppModule { }
