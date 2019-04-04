import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { users } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: string;
  usertoken: string;

  constructor(private userService: users) { }
  public profile= new FormGroup({
    password: new FormControl(null, Validators.required)
  })
  ngOnInit() {
  }

  Update()
  {
    this.id =localStorage.getItem('userid');
    this.usertoken = localStorage.getItem('token');
    this.userService.updatePassword(this.id, this.profile.value).subscribe(
      res=>{
        alert('Password Change Successfully');
      }
    )
  }
}
