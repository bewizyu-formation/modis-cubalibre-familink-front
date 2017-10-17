import { Injectable } from '@angular/core';
import { SignupApiService } from '../api/signup-api.service';
import { User } from '../../models/User';
import { Contact } from '../../models/Contact';

@Injectable()
export class SignupService {

  constructor(private api:SignupApiService) { }
  createContact(firstName:string, lastName:string, profil:object, phone:string):Promise<Contact> {
    return new Promise((resolve) => {
      this.api.createContact(firstName,lastName,profil,phone).then((contact) => {
        resolve(contact);
      });
    });
  }
  createUser(email:string,encPwd:string,contact:Contact):Promise<User> {
    return new Promise((resolve) => {
      this.api.createUser(email,encPwd,contact).then((user) => {
        resolve(user);
      });
    });
  }
}
