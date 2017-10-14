import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

import {SignupComponent} from './components/signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {HeaderComponent} from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
