import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {users} from '../../services/users.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-course-monitor',
  templateUrl: './course-monitor.component.html',
  styleUrls: ['./course-monitor.component.scss']
})
export class CourseMonitorComponent implements OnInit {

  constructor(private courseService: users) { }
  public addCoursemonitor = new FormGroup({

      'institution': new FormControl(null, Validators.required),
      'program': new FormControl(null, Validators.required),
      // 'catalogNumber': new FormControl(null, Validators.required),
      'q1': new FormControl(null, Validators.required),
      'q2': new FormControl(null, Validators.required),
      'q3': new FormControl(null, Validators.required),
      'q4': new FormControl(null, Validators.required),
      'q5': new FormControl(null, Validators.required),
      'siganture': new FormControl(null, Validators.required),
      'programCoordinatorName': new FormControl(null, Validators.required),
      'submitDate': new FormControl(null, Validators.required),

  });

  ngOnInit() {
  }
      saveCoursemonitor() {
        console.log(this.addCoursemonitor.value);
        this.courseService.post(environment.Coursemon, this.addCoursemonitor.value).subscribe(
          res => {
            alert('Save Successfully');
            this.addCoursemonitor.reset();
          });
      }
}
