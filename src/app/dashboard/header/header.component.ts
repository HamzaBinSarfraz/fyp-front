import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string;

  constructor() { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('datarole');
    console.log(this.currentUser);
  }

}
