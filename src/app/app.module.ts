import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

import {SignupComponent} from './components/signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninApiService} from "./services/api/signin-api.service";
import {SigninService} from "./services/business/signin.service";

import { ChooseGroupComponent } from './components/groups/choose-group/choose-group.component';
import { CreateGroupComponent } from './components/groups/create-group/create-group.component';
import { ListGroupComponent } from './components/groups/list-group/list-group.component';
import { GroupComponent } from './components/groups/group/group.component';

import { GroupApiService } from "./services/api/group-api.service";
import { GroupBusinessService } from "./services/business/group-business.service";
/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    SignInComponent,
    ChooseGroupComponent,
    CreateGroupComponent,
    ListGroupComponent,
    GroupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [SigninApiService, SigninService, GroupApiService,
    GroupBusinessService,],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
