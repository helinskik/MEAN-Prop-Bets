import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as queryString from 'query-string';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  googleLoginUrl: string
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

ngOnInit(): void {
  this.form = this.formBuilder.group({
    email: [null, Validators.required],
    name: [null, [Validators.required]]
  });
}

  register() {
    window.localStorage.setItem("un", this.form.value.name)
    window.localStorage.setItem("um", this.form.value.email)
    this.router.navigate(['entries'])
  }

  googleRegister() {
    const stringifiedParams = queryString.stringify({
      client_id: '1011221667530-6e7kha8c8mrbtjetti1jr7fkghrcaarc.apps.googleusercontent.com',
      redirect_uri: 'https://vast-badlands-87144.herokuapp.com/entries',
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '), // space seperated string
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
      disallow_webview: true
    });
    
    this.googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
    window.location.href = this.googleLoginUrl;
  }
}
