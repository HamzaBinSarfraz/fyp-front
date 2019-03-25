import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { users } from 'src/app/services/users.service';

@Component({
  selector: 'app-curriculum-related-information',
  templateUrl: './curriculum-related-information.component.html',
  styleUrls: ['./curriculum-related-information.component.scss']
})
export class CurriculumRelatedInformationComponent implements OnInit {

  constructor(private cirrculumService: users) { }
  public addCirculum = new FormGroup({
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
  }

  onSubmit() {
    console.log(this.addCirculum.value);
    this.cirrculumService.post(environment.Curriculum, this.addCirculum.value).subscribe(
      res => {
        alert('Save Successfully');
        this.addCirculum.reset();
      }
    );
  }
}
