/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { IRouting } from './shared/interfaces';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/:id', component: CustomerEditComponent},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ CustomersComponent, CustomerEditComponent, CustomerEditReactiveComponent, CustomersGridComponent ];
}
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from '../constants/routing.constants'
import { FormPageComponent } from './form-page/form-page.component'
import { EntriesPageComponent } from './entries-page/entries-page.component'
import { ReviewPageComponent } from './review-page/review-page.component'
//import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
//import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: FormPageComponent
      },
      {
        path: 'entries',
        component: EntriesPageComponent
      },
      // {
      //   path: 'signin-callback',
      //   component: SigninRedirectCallbackComponent
      // },
      // {
      //   path: 'signout-callback',
      //   component: SignoutRedirectCallbackComponent
      // },
      {
        path: 'review',
        component: ReviewPageComponent,
        children: [
          { path: ':id/:groupName/:playerName', component: ReviewPageComponent }
        ]
      },
      {
        path: '',   redirectTo: '/form', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
