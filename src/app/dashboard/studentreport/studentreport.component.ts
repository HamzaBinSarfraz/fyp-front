import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-studentreport',
  templateUrl: './studentreport.component.html',
  styleUrls: ['./studentreport.component.scss']
})
export class StudentreportComponent implements OnInit {

  public fools: any = [];
  public anVar: any;
  public usertoken: any;

  constructor(private getAllStudent: users, public jwt: JwtHelperService) { }

  public bla = new FormGroup({

    institution: new FormControl(null, Validators.required),
    campus: new FormControl(null, Validators.required),
    degree_program: new FormControl(null, Validators.required),
    admission_session: new FormControl(null, Validators.required),
    roll_number: new FormControl(null, Validators.required),
    cnic: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    father_name: new FormControl(null, Validators.required),
    uni_reg_no: new FormControl(null, Validators.required),
    credit_examptd: new FormControl(null, Validators.required),
    semester: new FormControl(null, Validators.required),
    hssc: new FormControl(null, Validators.required),
    total: new FormControl(null, Validators.required),
    remarks: new FormControl(null, Validators.required),
  });


  ngOnInit() {
    this.load();
  }


  load() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllStudent.get(environment.studinfo).subscribe(data => {
      this.fools = data.data;
      console.log(this.fools);

    });
  }

  editstudent(id) {
    console.log(id);

    // this.getAllStudent.get(environment.studinfo + '/' + id).subscribe(data => {
    //   console.log(data);

    // });
  }

  deletestudent(id) {
    this.getAllStudent.delete(environment.studinfo, id).subscribe(data => {
      alert('Delete Successfully');
      this.load();
  });
}
}
