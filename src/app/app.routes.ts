import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const PATH_HOME = 'home';
export const ROUTES: Routes = [
{ path: PATH_HOME, component: HomeComponent },
];
