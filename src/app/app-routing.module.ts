import { NgModule } from "@angular/core";
import { Routes, CanActivate, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { SignupComponent } from "./components/signup/signup.component";
import { StudentinfoadminComponent } from "./components/studentinfoadmin/studentinfoadmin.component";
import { GuardsService as guards } from "./services/guards.service";
import { StudentreportComponent } from "./components/studentreport/studentreport.component";
import { FinancialComponent } from "./components/financial/financial.component";
import { FieldAuditGuidelinesDRComponent } from "./components/field-audit-guidelines-dr/field-audit-guidelines-dr.component";
import { FieldAuditScheduleComponent } from "./components/field-audit-schedule/field-audit-schedule.component";
import { GradingPolicyComponent } from "./components/grading-policy/grading-policy.component";
import { InfrastructureComponent } from "./components/infrastructure/infrastructure.component";
import { ProgramMonitoringProcessComponent } from "./components/program-monitoring-process/program-monitoring-process.component";
// tslint:disable-next-line:max-line-length
// import { CurriculumRelatedInformationComponent } from './components/curriculum-related-information/curriculum-related-information.component';
import { FacultyInformationFIFComponent } from "./components/faculty-information-fif/faculty-information-fif.component";
import { PagesComponent } from "./components/pages/pages.component";
import { CourseManagementComponent } from "./components/course-management/course-management.component";
import { CourseVisitComponent } from "./components/course-visit/course-visit.component";
import { CourseMonitorComponent } from "./components/course-monitor/course-monitor.component";
import { CourseRegistrationComponent } from "./components/course-registration/course-registration.component";
import { CourseLogComponent } from "./components/course-log/course-log.component";
import { InstitutionFacultyInfoComponent } from "./components/institution-faculty-info/institution-faculty-info.component";
import { AlumniInfoComponent } from "./components/alumni-info/alumni-info.component";
import { StudentInfoComponent } from "./components/student-info/student-info.component";
import { AdmissionComponent } from "./components/admission/admission.component";
import { CurriculumRelatedInformationComponent } from "./components/curriculum-related-information/curriculum-related-information.component";
import { FinancialReportComponent } from "./components/reports/financial-report/financial-report.component";
import { FieldAuditScheduleReportComponent } from "./components/reports/field-audit-schedule-report/field-audit-schedule-report.component";
import { ProgramMonitoringProcessReportComponent } from "./components/reports/program-monitoring-process-report/program-monitoring-process-report.component";
import { FacultyInfoReportComponent } from "./components/reports/faculty-info-report/faculty-info-report.component";
import { CourseDisplayReportComponent } from "./components/reports/course-display-report/course-display-report.component";
import { CourseLogTemplateReportComponent } from "./components/reports/course-log-template-report/course-log-template-report.component";
import { CourseMonitoringProcessReportComponent } from "./components/reports/course-monitoring-process-report/course-monitoring-process-report.component";
import { CourseRegistrationReportComponent } from "./components/reports/course-registration-report/course-registration-report.component";
import { CourseDescriptionReportComponent } from "./components/reports/course-description-report/course-description-report.component";
import { logging } from "protractor";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
const routes: Routes = [
  { path: "", component: AuthComponent },

  // {path: 'login' , component: AuthComponent},
  { path: "signup", component: SignupComponent },
  // canActivate: [guards]
  {
    path: "home",
    component: DashboardComponent,
    children: [
      
      { path: '', component: PagesComponent },

      { path: "studentinfoadmin", component: StudentinfoadminComponent },

      { path: "studentreport", component: StudentreportComponent },

      { path: "financial", component: FinancialComponent },

      {
        path: "fieldAuditguidelinesDR",
        component: FieldAuditGuidelinesDRComponent
      },

      { path: "fieldAuditschedule", component: FieldAuditScheduleComponent },

      { path: "gradingpolicy", component: GradingPolicyComponent },

      { path: "infrastructure", component: InfrastructureComponent },

      {
        path: "programMonitoringProcess",
        component: ProgramMonitoringProcessComponent
      },

      {
        path: "facultyInformationFIF",
        component: FacultyInformationFIFComponent
      },
      { path: "coursemanagement", component: CourseManagementComponent },
      { path: "coursevisit", component: CourseVisitComponent },
      { path: "coursemonitor", component: CourseMonitorComponent },
      { path: "courseregistration", component: CourseRegistrationComponent },
      { path: "courselog", component: CourseLogComponent },
      {
        path: "institutionfaculty",
        component: InstitutionFacultyInfoComponent
      },
      { path: "alumniinfo", component: AlumniInfoComponent },
      { path: "studentinfo", component: StudentInfoComponent },
      { path: "admission", component: AdmissionComponent },
      { path: "curriculum", component: CurriculumRelatedInformationComponent },
      { path: "financialreport", component: FinancialReportComponent },
      {
        path: "fieldauditreport",
        component: FieldAuditScheduleReportComponent
      },
      {
        path: "fieldauditguidelinereport",
        component: FieldAuditGuidelinesDRComponent
      },
      { path: "gradingpolicyreport", component: GradingPolicyComponent },
      { path: "infrastructurereport", component: InfrastructureComponent },
      {
        path: "programmonitorreport",
        component: ProgramMonitoringProcessReportComponent
      },
      { path: "facultyreport", component: FacultyInfoReportComponent },
      { path: "coursedisplayreport", component: CourseDisplayReportComponent },

      { path: "courselogreport", component: CourseLogTemplateReportComponent },
      {
        path: "coursemonitorreport",
        component: CourseMonitoringProcessReportComponent
      },
      {
        path: "courseregistrationreport",
        component: CourseRegistrationReportComponent
      },
      {
        path: "coursedescriptionreport",
        component: CourseDescriptionReportComponent
      },
      {
        path: "curriculumreport",
        component: CurriculumRelatedInformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
