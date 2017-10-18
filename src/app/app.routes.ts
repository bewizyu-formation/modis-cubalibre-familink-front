import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ChooseGroupComponent } from './components/groups/choose-group/choose-group.component';
import { ContactsComponent } from "./components/contacts/contacts/contacts.component";
import { ListContactsComponent } from "./components/contacts/list-contacts/list-contacts.component";
import { CreateContactComponent } from "./components/contacts/create-contact/create-contact.component";
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'group', component: ChooseGroupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'listContacts', component: ListContactsComponent },
  { path: 'createContact', component: CreateContactComponent },
];
