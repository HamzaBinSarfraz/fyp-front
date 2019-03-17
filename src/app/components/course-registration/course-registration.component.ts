import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {users} from '../../services/users.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {

  constructor(private studentService: users) { }
    public AddCourse = new FormGroup({
      'institution': new FormControl(null, Validators.required),
      'program': new FormControl(null, Validators.required),
      'preRegPolicyWhen': new FormControl(null, Validators.required),
      'preRegPolicyHow': new FormControl(null, Validators.required),
      'lateRegPolicy1': new FormControl(null, Validators.required),
      'lateRegPolicy2': new FormControl(null, Validators.required),
      'minAndMaxCreditHours': new FormControl(null, Validators.required),
      'processToEnsure': new FormControl(null, Validators.required),
      'deanSiganture': new FormControl(null, Validators.required),
      'submitDate': new FormControl(null, Validators.required),
    });

  ngOnInit() {
  }
  saveStudentreg(event) {
console.log(this.AddCourse.value);
    this.studentService.post(environment.Coursereg, this.AddCourse.value).subscribe(
      res => {
        alert('Save Successfully');
        this.AddCourse.reset();
      });
  }
}
