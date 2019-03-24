import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { users } from 'src/app/services/users.service';

@Component({
  selector: 'app-faculty-informtion-report',
  templateUrl: './faculty-informtion-report.component.html',
  styleUrls: ['./faculty-informtion-report.component.scss']
})
export class FacultyInformtionReportComponent implements OnInit {
  usertoken: string;
  fools: any;

  constructor(private getAllStudent: users) { }

  ngOnInit() {
    this.load();
  }
  load() {

    this.usertoken = localStorage.getItem('token');
    // this.adddata.token=this.usertoken;
    this.getAllStudent.get(environment.Faculty).subscribe(data => {
      this.fools = data.data;
      console.log(this.fools);

    });
  }
  deletefaculty(id) {
    this.getAllStudent.delete(environment.Faculty, id).subscribe(data => {
      alert('Delete Successfully');
  }
    );

}
}

