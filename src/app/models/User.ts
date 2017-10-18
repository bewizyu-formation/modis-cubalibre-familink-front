import {Contact} from './Contact';

export class User {
  constructor(public email: string, public contact: Contact, public id?: number) {
  }
}
