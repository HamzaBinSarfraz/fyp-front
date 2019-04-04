import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { users } from 'src/app/services/users.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty-informtion-report',
  templateUrl: './faculty-informtion-report.component.html',
  styleUrls: ['./faculty-informtion-report.component.scss']
})
export class FacultyInformtionReportComponent implements OnDestroy, OnInit {
  usertoken: string;
  fools: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private getAllStudent: users, private http: Http) { }
  private addFacultyinfo = new FormGroup({
    institution: new FormControl(null, Validators.required),
    program: new FormControl(null, Validators.required),
        facultySize: new FormControl(null, Validators.required),
        noOfFaculty: new FormControl(null, Validators.required),
        fullProfrssor: new FormControl(null, Validators.required),
        associateProfessor: new FormControl(null, Validators.required),
        assistantProfessor: new FormControl(null, Validators.required),
        leacures: new FormControl(null, Validators.required),
        teaching: new FormControl(null, Validators.required),
        facultySize1: new FormControl(null, Validators.required),
        noOfFaculty1: new FormControl(null, Validators.required),
        fullProfrssor1: new FormControl(null, Validators.required),
        associateProfessor1: new FormControl(null, Validators.required),
        assistantProfessor1: new FormControl(null, Validators.required),
        leacures1: new FormControl(null, Validators.required),
        teaching1: new FormControl(null, Validators.required),
        totalFaculty: new FormControl(null, Validators.required),
        resigned: new FormControl(null, Validators.required),
        retired: new FormControl(null, Validators.required),
        terminated: new FormControl(null, Validators.required),
        newInduction: new FormControl(null, Validators.required),
        totalFaculty1: new FormControl(null, Validators.required),
        resigned1: new FormControl(null, Validators.required),
        retired1: new FormControl(null, Validators.required),
        terminated1: new FormControl(null, Validators.required),
        newInduction1: new FormControl(null, Validators.required),
        totalFaculty2: new FormControl(null, Validators.required),
        resigned2: new FormControl(null, Validators.required),
        retired2: new FormControl(null, Validators.required),
        terminated2: new FormControl(null, Validators.required),
        newInduction2: new FormControl(null, Validators.required),
        totalFaculty3: new FormControl(null, Validators.required),
        resigned3: new FormControl(null, Validators.required),
        retired3: new FormControl(null, Validators.required),
        terminated3: new FormControl(null, Validators.required),
        newInduction3: new FormControl(null, Validators.required),
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
    this.getAllStudent.get(environment.Faculty).subscribe(data => {
      this.fools = data.data;
      this.dtTrigger.next();
      console.log(this.fools);

    });
  }
  deletefaculty(id) {
    this.getAllStudent.delete(environment.Faculty, id).subscribe(data => {
      alert('Delete Successfully');
      this.load();
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

update(id) {
console.log(id);
this.usertoken = localStorage.getItem('token');
this.getAllStudent.getOnecirruclum(id).subscribe(
  res => {
    if (res.data) {
      console.log(res.data);
      this.addFacultyinfo.patchValue(res.data);
    }
  },
  err => {
    console.log(err);
  }
);
}
}

