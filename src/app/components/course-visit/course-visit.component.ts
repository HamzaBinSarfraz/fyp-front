import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course-visit',
  templateUrl: './course-visit.component.html',
  styleUrls: ['./course-visit.component.scss']
})
export class CourseVisitComponent implements OnInit {

  constructor(private couserService: users) { }
  public addCoursevisit = new FormGroup({
    'viceChancellor': new FormControl(null, Validators.required),
	'signature': new FormControl(null, Validators.required),
	'date': new FormControl(null, Validators.required),
  });
  ngOnInit() {
  }
  saveCoursevisit() {
    console.log(this.addCoursevisit.value);
    this.couserService.post(environment.Coursedis, this.addCoursevisit.value).subscribe(
      res => {
        alert('Save Successfully');
        this.addCoursevisit.reset();
      }
    );
  }
}
