import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },

];
