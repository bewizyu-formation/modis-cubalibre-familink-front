import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ChooseGroupComponent} from "./components/groups/choose-group/choose-group.component";

export const PATH_HOME = 'home';
export const PATH_GROUP = 'group';
export const ROUTES: Routes = [
  { path: PATH_HOME, component: HomeComponent },
  { path: PATH_GROUP, component: ChooseGroupComponent },
];
