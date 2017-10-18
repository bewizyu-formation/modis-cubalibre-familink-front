import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatListModule,
  MatCardModule,
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninApiService } from './services/api/signin-api.service';
import { SigninService } from './services/business/signin.service';
import { SignupService } from './services/business/signup.service';
import { SignupApiService } from './services/api/signup-api.service';

import { ChooseGroupComponent } from './components/groups/choose-group/choose-group.component';
import { CreateGroupComponent } from './components/groups/create-group/create-group.component';
import { ListGroupComponent } from './components/groups/list-group/list-group.component';
import { GroupComponent } from './components/groups/group/group.component';

import { GroupApiService } from './services/api/group-api.service';
import { GroupBusinessService } from './services/business/group-business.service';
import { ListContactsComponent } from './components/contacts/list-contacts/list-contacts.component';
import { ContactsComponent } from './components/contacts/contacts/contacts.component';
import { CreateContactComponent } from './components/contacts/create-contact/create-contact.component';
import { ContactsBusinessService } from './services/business/contacts-business.service';
import { ContactsApiService } from './services/api/contacts-api.service';

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
    ListContactsComponent,
    ContactsComponent,
    CreateContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [SigninApiService, SigninService, GroupApiService,
    GroupBusinessService,SignupService,SignupApiService, ContactsBusinessService, ContactsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
