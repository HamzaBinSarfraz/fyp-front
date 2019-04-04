import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { identifierModuleUrl } from '@angular/compiler';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentreport',
  templateUrl: './studentreport.component.html',
  styleUrls: ['./studentreport.component.scss']
})
export class StudentreportComponent implements OnDestroy, OnInit {

  public fools: any = [];
  public anVar: any;
  public usertoken: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private getAllStudent: users, public jwt: JwtHelperService, private router: Router) { }

  public reportform = new FormGroup({
    _id: new FormControl(null, Validators.required),
    university: new FormControl(null, Validators.required),
    campus: new FormControl(null, Validators.required),
    degree_program: new FormControl(null, Validators.required),
    admission_session: new FormControl(null, Validators.required),
    student_name: new FormControl(null, Validators.required),
    father_name: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    roll_no: new FormControl(null, Validators.required),
    admission_date: new FormControl(null, Validators.required),
    nationality: new FormControl(null, Validators.required),
    cnic: new FormControl(null, Validators.required),
    date_of_birth:  new FormControl(null, Validators.required),
    mailing_address:  new FormControl(null, Validators.required),
    city_mail_address:  new FormControl(null, Validators.required),
    hssc_degree_name:  new FormControl(null, Validators.required),
    hssc_total_marks:  new FormControl(null, Validators.required),
    hssc_obtained_marks:  new FormControl(null, Validators.required),
  });


  ngOnInit() {
    this.load();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }


  load() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllStudent.get(environment.studinfo).subscribe(data => {
      this.fools = data.data;
      console.log(this.fools);
      this.dtTrigger.next();
    });
  }

  editstudent(id) {
    console.log(id);

    this.getAllStudent.updateOnestudent(environment.studinfo + '/' + id, this.reportform.value).subscribe(data => {
      console.log(data);
      this.load();
    });
  }

  deletestudent(id) {
    this.getAllStudent.delete(environment.studinfo, id).subscribe(data => {
      alert('Delete Successfully');
      this.load();
    });
  }

  update_student(id) {
    console.log(id);
    this.usertoken = localStorage.getItem('token');
    this.getAllStudent.getOnestudent(id).subscribe(
      res => {
        if (res.data) {
          console.log(res.data);
          this.reportform.patchValue(res.data);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
