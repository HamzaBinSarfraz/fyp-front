import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string;

  constructor(private route: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('datarole');
    console.log(this.currentUser);
  }

  logout()
  {
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
