import { Contact } from './Contact';

export class User{
  constructor(public email:string, public token:string, public contact:Contact) {}
}
