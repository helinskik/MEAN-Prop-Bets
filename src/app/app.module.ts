import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoDialogComponent } from './form-page/info-dialog/info-dialog.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { EntriesPageComponent } from './entries-page/entries-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
//import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
//import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'
import { AuthModule } from '@auth0/auth0-angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register-page/register.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    AuthModule.forRoot({
      domain: 'dev-njexuf7k.us.auth0.com',
      clientId: 'U3p1DYzxxirb5rGFxRDNKK4MVBZiOVtT'
    }),
    CoreModule,   //Singleton objects
    SharedModule
  ],
  entryComponents: [InfoDialogComponent],
  declarations: [ AppComponent,
    FormPageComponent,
    InfoDialogComponent,
    EntriesPageComponent,
    ReviewPageComponent,
    NavBarComponent,
    RegisterComponent,
    LoadingScreenComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AuthGuardService
  ]
})
export class AppModule { }