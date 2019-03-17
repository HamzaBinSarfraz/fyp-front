import { Component, OnInit } from "@angular/core";
import { EmmiterService } from "src/app/services/emmiter.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  role: any;
  constructor(private messenger: EmmiterService) {
    this.messenger.change.subscribe(data => {

      console.log('____________ here _____________');
      // this.role = localStorage.getItem("role");
    });
  }

  ngOnInit() {
  }
}
