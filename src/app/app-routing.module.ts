import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { AuthComponent } from './authenciation/auth/auth.component';
import { SignupComponent } from './authenciation/signup/signup.component';
import { StudentinfoadminComponent } from './dashboard/studentinfoadmin/studentinfoadmin.component';
import { GuardsService as guards } from './services/guards.service';
import { StudentreportComponent } from './dashboard/studentreport/studentreport.component';
import { FinancialComponent } from './dashboard/financial/financial.component';
import { FieldAuditGuidelinesDRComponent } from './dashboard/field-audit-guidelines-dr/field-audit-guidelines-dr.component';
import { FieldAuditScheduleComponent } from './dashboard/field-audit-schedule/field-audit-schedule.component';
import { GradingPolicyComponent } from './dashboard/grading-policy/grading-policy.component';
import { InfrastructureComponent } from './dashboard/infrastructure/infrastructure.component';
import { ProgramMonitoringProcessComponent } from './dashboard/program-monitoring-process/program-monitoring-process.component';
// tslint:disable-next-line:max-line-length
import { FacultyInformationFIFComponent } from './dashboard/faculty-information-fif/faculty-information-fif.component';
import { PagesComponent } from './dashboard/pages/pages.component';
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
import { CurriculumRelatedInformationComponent } from './dashboard/curriculum-related-information/curriculum-related-information.component';
const routes: Routes = [

  {path: '' , component: PagesComponent },

  {path: 'login' , component: AuthComponent},
  {path: 'faculty' , component: SignupComponent},
  {path: 'admin' , component: AdminComponent},
  {path: 'student' , component: StudentComponent},

  // canActivate: [guards]
  {path: 'dashboard', component: DashboardComponent, children: [

  {path: 'studentinfoadmin', component: StudentinfoadminComponent },

  {path: 'studentreport', component: StudentreportComponent },

  { path: 'financial', component: FinancialComponent},

  { path: 'fieldAuditguidelinesDR', component: FieldAuditGuidelinesDRComponent},

  { path: 'fieldAuditschedule' ,  component: FieldAuditScheduleComponent},

  {path: 'gradingpolicy', component: GradingPolicyComponent},

  {path: 'infrastructure', component: InfrastructureComponent},

  {path: 'programMonitoringProcess', component: ProgramMonitoringProcessComponent},

  {path: 'facultyInformationFIF', component: FacultyInformationFIFComponent},
  {path: 'coursemanagementreport', component: CourseReportComponent},
  {path: 'facultyInformationReport', component: FacultyInformtionReportComponent},
  {path: 'curriculumRelatedInformation', component: CurriculumRelatedInformationComponent},
  { path: 'coursemanagement', component: CourseManagementComponent },
  { path: 'coursevisit', component: CourseVisitComponent },
  { path: 'coursemonitor', component: CourseMonitorComponent },
  { path: 'courseregistration', component: CourseRegistrationComponent },
  { path: 'courselog', component: CourseLogComponent }
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
