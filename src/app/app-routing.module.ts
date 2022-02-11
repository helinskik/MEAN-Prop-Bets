import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component'
import { EntriesPageComponent } from './entries-page/entries-page.component'
import { ReviewPageComponent } from './review-page/review-page.component'
import { RegisterComponent } from './register-page/register.component'

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
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'review',
        component: ReviewPageComponent,
        children: [
          { path: ':id/:groupName/:playerName', component: ReviewPageComponent }
        ]
      },
      {
        path: '',   redirectTo: '/entries', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
