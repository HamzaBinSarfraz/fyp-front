import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authenciation/auth/auth.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { PagesComponent } from './dashboard/pages/pages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './authenciation/signup/signup.component';
import { StudentinfoadminComponent } from './dashboard/studentinfoadmin/studentinfoadmin.component';
import { users } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GuardsService } from './services/guards.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { StudentreportComponent } from './dashboard/studentreport/studentreport.component';

import { FieldAuditScheduleComponent } from './dashboard/field-audit-schedule/field-audit-schedule.component';
import { FieldAuditGuidelinesDRComponent } from './dashboard/field-audit-guidelines-dr/field-audit-guidelines-dr.component';
import { GradingPolicyComponent } from './dashboard/grading-policy/grading-policy.component';
import { InfrastructureComponent } from './dashboard/infrastructure/infrastructure.component';
import { ProgramMonitoringProcessComponent } from './dashboard/program-monitoring-process/program-monitoring-process.component';
import { FinancialComponent } from './dashboard/financial/financial.component';
import { FacultyInformationFIFComponent } from './dashboard/faculty-information-fif/faculty-information-fif.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { CourseManagementComponent } from './dashboard/course-management/course-management.component';
import { CourseVisitComponent } from './dashboard/course-visit/course-visit.component';
import { CourseMonitorComponent } from './dashboard/course-monitor/course-monitor.component';
import { CourseRegistrationComponent } from './dashboard/course-registration/course-registration.component';
import { CourseLogComponent } from './dashboard/course-log/course-log.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './authenciation/admin/admin.component';
import { StudentComponent } from './authenciation/student/student.component';
import { FacultyInformtionReportComponent } from './dashboard/faculty-informtion-report/faculty-informtion-report.component';
import { CourseReportComponent } from './dashboard/course-report/course-report.component';


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
    DashboardComponent,
    AdminComponent,
    StudentComponent,
    FacultyInformtionReportComponent,
    CourseReportComponent,
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
