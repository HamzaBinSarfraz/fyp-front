import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  constructor(private addcouser: users) { }
  public addCoursedes = new FormGroup({

      'institution': new FormControl(null, Validators.required),
           'program':  new FormControl(null, Validators.required),
           'courseCode':  new FormControl(null, Validators.required),
           'courseTitle': new FormControl(null, Validators.required),
           'assessment':  new FormControl(null, Validators.required),
           'courseCoordinator': new FormControl(null, Validators.required),
           'url':  new FormControl(null, Validators.required),
           'currentCatalog': new FormControl(null, Validators.required),
           'textBook':  new FormControl(null, Validators.required),
           'referenceMaterial':  new FormControl(null, Validators.required),
           'courseGoals': new FormControl(null, Validators.required),
           'topics':  new FormControl(null, Validators.required),
           'laboratory':  new FormControl(null, Validators.required),
           'programmingAssignment':  new FormControl(null, Validators.required),
          //  'classTime':n [
          //      {
          //          'theory':  new FormControl(null, Validators.required),
          //          'problemAnalysis': new FormControl(null, Validators.required),
          //          'solDesign': new FormControl(null, Validators.required),
          //          'socialIssues':  new FormControl(null, Validators.required),
          //      }
          //  ],
           'instructorName':  new FormControl(null, Validators.required),
           'instructorSig':  new FormControl(null, Validators.required),
           'date':  new FormControl(null, Validators.required),

  });
  ngOnInit() {
  }

  saveCoursereg($event) {
    console.log(this.addCoursedes.value);
    this.addcouser.post(environment.Coursediscription, this.addCoursedes.value).subscribe(
      res => {
        alert('Save Successfully');
        this.addCoursedes.reset();
      }
    );
  }
}
