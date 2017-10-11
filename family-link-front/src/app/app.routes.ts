import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
export const PATH_HOME:string = 'home';
export const ROUTES: Routes = [
{ path: PATH_HOME, component: HomeComponent },
];
