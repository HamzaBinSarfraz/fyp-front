import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {logup} from '../../models/signup';
import {users} from '../../services/users.service';
import {environment} from '../../../environments/environment';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 public register: logup;
  public usertoken: any;
  constructor(private signupservice: users, private route: Router) { }
  public signup = new FormGroup({
  Id: new FormControl(0),
  name: new FormControl(null, Validators.required),
  email: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required),
  role: new FormControl(null, Validators.required)
});

  ngOnInit() {
  }
  save(event) {
    this.signup.value.role = 0;
    this.register = this.signup.value;
    console.log(this.register);
    this.signupservice.post(environment.signup, this.register).subscribe(data => {
      if (data.status === true) {
        console.log('save successfully');
        this.route.navigate(['/login']);

      }
    });

  }
}
