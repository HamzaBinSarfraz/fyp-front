import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from '../../services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-faculty-information-fif',
  templateUrl: './faculty-information-fif.component.html',
  styleUrls: ['./faculty-information-fif.component.scss']
})
export class FacultyInformationFIFComponent implements OnInit {

  constructor(private facultyService: users) { }
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
  }
  saveAddfac() {
    console.log(this.addFacultyinfo.value);
    this.facultyService.post(environment.Faculty, this.addFacultyinfo.value).subscribe(
      res => {
        alert('Save Successfully');
        this.addFacultyinfo.reset();
      }
    );
  }
}
