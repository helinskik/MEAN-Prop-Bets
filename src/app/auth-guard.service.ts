import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router) {}

  // canActivate() {
  //   if (!this.auth.isLoggedIn()) {
  //     this.router.navigateByUrl('/');
  //     return false;
  //   }
  //   return true;
  // }
}
