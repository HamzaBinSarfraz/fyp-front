import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-report',
  templateUrl: './course-report.component.html',
  styleUrls: ['./course-report.component.scss']
})
export class CourseReportComponent implements OnInit {
  usertoken: string;
  fools5: any = [];
  fools3: any = [];
  fools2: any = [];
  fools1: any = [];
  fools4: any = [];

  constructor(private getAllcousrseService: users) { }

  ngOnInit() {
    this.CourseDisplayfortheVisit();
    this.courseLogTemplate();
    this.CourseMonitoringProcess();
    this.CourseRegistration();
    this.CourseDescription();

  }

  CourseDisplayfortheVisit() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Coursedis).subscribe(data => {
      this.fools1 = data.data;
      console.log(this.fools1);

    });
  }
  courseLogTemplate() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Courselog).subscribe(data => {
      this.fools2 = data.data;
      console.log(this.fools2);

    });
  }
  CourseMonitoringProcess() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Coursemon).subscribe(data => {
      this.fools3 = data.data;
      console.log(this.fools3);

    });
  }
  CourseRegistration() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Coursereg).subscribe(data => {
      this.fools4 = data.data;
      console.log(this.fools4);

    });
  }
  CourseDescription() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Coursediscription).subscribe(data => {
      this.fools5 = data.data;
      console.log(this.fools5);

    });
  }

  deleteCourseDisplay(id) {
    console.log(id);
    this.getAllcousrseService.delete(environment.Coursedis, id).subscribe(data => {
      alert('Delete Successfully');
      
    });
  }

  deleteCourseLog(id) {
    console.log(id);
    this.getAllcousrseService.delete(environment.Courselog, id).subscribe(data => {
      alert('Delete Successfully');
    });
  }
  deleteCOURSEMONITORING(id) {
    console.log(id);
    this.getAllcousrseService.delete(environment.Coursemon, id).subscribe(data => {
      alert('Delete Successfully');
    });
  }

  deleteCOURSEREGISTRATION(id) {
    console.log(id);

    this.getAllcousrseService.delete(environment.Coursereg, id).subscribe(data => {
      alert('Delete Successfully');
    });
  }
  deleteCOURSEDESCRIPTION(id) {
    console.log(id);
    this.getAllcousrseService.delete(environment.Coursediscription, id).subscribe(data => {
      alert('Delete Successfully');

    });
  }
}
