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
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoDialogComponent } from './form-page/info-dialog/info-dialog.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { EntriesPageComponent } from './entries-page/entries-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
//import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
//import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'
//import { AuthModule, AuthService } from '@auth0/auth0-angular';

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
    MatToolbarModule,
    //AuthModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    CoreModule,   //Singleton objects
    SharedModule
  ],
  entryComponents: [InfoDialogComponent],
  declarations: [ AppComponent,
    FormPageComponent,
    InfoDialogComponent,
    EntriesPageComponent,
    ReviewPageComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }