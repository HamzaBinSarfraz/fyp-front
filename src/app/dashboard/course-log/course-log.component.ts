import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course-log',
  templateUrl: './course-log.component.html',
  styleUrls: ['./course-log.component.scss']
})
export class CourseLogComponent implements OnInit {

  constructor(private courselogService: users) { }
  public addcourselog = new FormGroup({

      'institution': new FormControl(null, Validators.required),
            'program': new FormControl(null, Validators.required),
            'catalogNumber': new FormControl(null, Validators.required),
            'instructorName': new FormControl(null, Validators.required),
            'date': new FormControl(null, Validators.required),
            'duration': new FormControl(null, Validators.required),
            'topicsCovered': new FormControl(null, Validators.required),
            'evaluationInstruments': new FormControl(null, Validators.required),
            'siganture': new FormControl(null, Validators.required),
            'instructorSignature': new FormControl(null, Validators.required),
            'submitDate': new FormControl(null, Validators.required),

  });
  ngOnInit() {
  }

  saveAddcourselog() {
    console.log(this.addcourselog.value);
    this.courselogService.post(environment.Courselog, this.addcourselog.value).subscribe(
      res => {
        alert('Save Successfully');
        this.addcourselog.reset();
      }
    );

  }
}
