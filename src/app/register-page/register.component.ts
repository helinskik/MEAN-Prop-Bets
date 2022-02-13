import { Component } from '@angular/core';
import * as queryString from 'query-string';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  googleLoginUrl: string

  constructor() {}

  register() {
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
