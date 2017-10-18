import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ChooseGroupComponent} from './components/groups/choose-group/choose-group.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {path: '', component: SignInComponent},
  { path: 'group', component: ChooseGroupComponent },
  { path: 'signup', component: SignupComponent },
];
