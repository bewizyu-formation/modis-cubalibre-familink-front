import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const PATH_HOME = 'home';
export const PATH_SIGNUP = 'signup';
export const ROUTES: Routes = [
{ path: PATH_HOME, component: HomeComponent },
  { path: PATH_SIGNUP, component: SignupComponent },

];
