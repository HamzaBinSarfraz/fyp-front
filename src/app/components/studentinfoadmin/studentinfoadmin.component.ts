import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {users} from '../../services/users.service';
import {environment} from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-studentinfoadmin',
  templateUrl: './studentinfoadmin.component.html',
  styleUrls: ['./studentinfoadmin.component.scss']
})
export class StudentinfoadminComponent implements OnInit {
  public usertoken: any;
  public campusName: any;
  public uniName: any;
  constructor(private studentservice: users, public jwt: JwtHelperService) { }
  public AddStudentData = new FormGroup ({

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
    this.campusName = "Islamabad"
    this.uniName = "Federal Urdu University"
  }

  save(event) {
    console.log(this.AddStudentData.value);
    this.usertoken = localStorage.getItem('token');
    console.log(this.usertoken);
     this.AddStudentData.value.token = this.usertoken;
    this.studentservice.post(environment.studinfo, this.AddStudentData.value).subscribe(data => {

      if (data.success === true) {

        console.log('save successfully');

      }

    });
  }

}
