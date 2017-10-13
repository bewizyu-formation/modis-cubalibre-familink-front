import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChooseGroupComponent } from './components/groups/choose-group/choose-group.component';
import { CreateGroupComponent } from './components/groups/create-group/create-group.component';
import { ListGroupComponent } from './components/groups/list-group/list-group.component';
import { GroupComponent } from './components/groups/group/group.component';


@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      SignupComponent,
      ChooseGroupComponent,
      CreateGroupComponent,
      ListGroupComponent,
      GroupComponent
  ],
  imports: [
      RouterModule.forRoot(ROUTES),
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
