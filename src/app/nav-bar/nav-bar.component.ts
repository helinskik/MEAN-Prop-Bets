import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../core/data.service";
import * as queryString from "query-string";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  public isLoggedIn = false;
  public userEmail = "";
  public userName = "";

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.userEmail = window.localStorage.getItem("um");
    this.userName = window.localStorage.getItem("un");
    if (this.userEmail && this.userName) this.isLoggedIn = true;
    else {
      const urlParams = queryString.parse(window.location.search);
      if (urlParams.code) {
        this.dataService.getRegisteration(urlParams.code).subscribe((token) => {
          this.dataService.getUserInfo(token.access_token).subscribe((info) => {
            window.localStorage.setItem("um", info.email);
            window.localStorage.setItem("un", info.name);
            this.userName = info.name
            this.isLoggedIn = true;
          });
        });
      } else {
        this.router.navigate(["register"]);
      }
    }
  }

  login() {
    this.router.navigate(["register"]);
  }

  logout() {
    this.isLoggedIn = false;
    window.localStorage.removeItem("um");
    window.localStorage.removeItem("un");
    this.router.navigate(["register"]);
  }
}
