import { Component, OnInit, OnDestroy } from '@angular/core';
import { users } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-curriculum-related-information-report',
  templateUrl: './curriculum-related-information-report.component.html',
  styleUrls: ['./curriculum-related-information-report.component.scss']
})
export class CurriculumRelatedInformationReportComponent implements OnDestroy, OnInit {
  usertoken: string;
  fools: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private getAllcousrseService: users) { }
  public addCirculum = new FormGroup({
    _id: new FormControl(null, Validators.required),
    'institution': new FormControl(null, Validators.required),
    'program': new FormControl(null, Validators.required),
    'date': new FormControl(null, Validators.required),

    'computingCoreCoursesCreditHours': new FormControl(null, Validators.required),
    'majorBaseCoreCreditHours': new FormControl(null, Validators.required),
    'majorBaseElectiveCreditHours': new FormControl(null, Validators.required),
    'supportinSciencesCreditHours': new FormControl(null, Validators.required),
    'generalElectivesCreditHours': new FormControl(null, Validators.required),
    'universityElectivesCreditHours': new FormControl(null, Validators.required),

    'computingCoreCoursesCumulativeCreditHours': new FormControl(null, Validators.required),
    'majorBaseCoreCumulativeCreditHours': new FormControl(null, Validators.required),
    'majorBaseElectiveCumulativeCreditHours': new FormControl(null, Validators.required),
    'supportinSciencesCumulativeCreditHours': new FormControl(null, Validators.required),
    'generalElectivesCumulativeCreditHours': new FormControl(null, Validators.required),
    'universityElectivesCumulativeCreditHours': new FormControl(null, Validators.required),

    'courseCode': new FormControl(null, Validators.required),
    'courseTitle': new FormControl(null, Validators.required),
    'creditHour': new FormControl(null, Validators.required),
    'prerequiste': new FormControl(null, Validators.required),

    'courseCode1': new FormControl(null, Validators.required),
    'courseTitle1': new FormControl(null, Validators.required),
    'creditHour1': new FormControl(null, Validators.required),
    'prerequiste1': new FormControl(null, Validators.required),

    'courseCode2': new FormControl(null, Validators.required),
    'courseTitle2': new FormControl(null, Validators.required),
    'creditHour2': new FormControl(null, Validators.required),
    'prerequiste2': new FormControl(null, Validators.required),

    'courseCode3': new FormControl(null, Validators.required),
    'courseTitle3': new FormControl(null, Validators.required),
    'creditHour3': new FormControl(null, Validators.required),
    'prerequiste3': new FormControl(null, Validators.required),

    'courseCode4': new FormControl(null, Validators.required),
    'courseTitle4': new FormControl(null, Validators.required),
    'creditHour4': new FormControl(null, Validators.required),
    'prerequiste4': new FormControl(null, Validators.required),

    'courseCode5': new FormControl(null, Validators.required),
    'courseTitle5': new FormControl(null, Validators.required),
    'creditHour5': new FormControl(null, Validators.required),
    'prerequiste5': new FormControl(null, Validators.required),

  });
  ngOnInit() {
    this. CourseRegistration();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  CourseRegistration() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllcousrseService.get(environment.Curriculum).subscribe(data => {
      this.fools = data.data;
      console.log(this.fools);
      this.dtTrigger.next();

    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};

  }

  editform(id) {
    console.log(id);
    this.usertoken = localStorage.getItem('token');
    this.getAllcousrseService.getOnecirruclum(id).subscribe(
      res => {
        if (res.data) {
          console.log(res.data);
          this.addCirculum.patchValue(res.data);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  update(id) {
    this.getAllcousrseService.updateOnecirruclum(id, this.addCirculum.value).subscribe(data => {
      console.log(data);
      this.CourseRegistration();
    });
  }

  deleteCourseDisplay(id) {
    this.getAllcousrseService.delete(environment.Curriculum, id).subscribe(data => {
      alert('Delete Successfully');
      this.CourseRegistration();
  }
    );
  }
}
