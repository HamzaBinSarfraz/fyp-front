import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {logup} from '../../models/signup'
import {users} from "../../services/users.service"
import {environment} from '../../../environments/environment'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpObj: any = {};
  public register:logup;
  public usertoken:any;
  constructor(private signupservice:users,private route:Router) { }

    ngOnInit() {
      this.signUpObj.role = 'student'
  }
  userType(event){
    console.log(event.target.value)
    this.signUpObj.role = event.target.value;
  }
  save(event)
  {
    console.log(this.signUpObj);
    this.signupservice.post(environment.signup,this.signUpObj).subscribe(data=>{
      if(data.status===true)
      {
        console.log(data);
        console.log("save successfully");
        this.route.navigate(['/login']);
        
      }
    })
    
  }
}
