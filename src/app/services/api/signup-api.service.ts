import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/User';
import 'rxjs/add/operator/toPromise';
import { Contact } from '../../models/Contact';


const API_SRV_URL = 'http://localhost';
const API_SRV_PORT = 8080;
const API_BASE_URI = 'familink-api/mvc';
const API_SRV_ROOT_USER = 'user';
const API_SRV_ROOT_CONTACT = 'contact';
const URL_USER = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_ROOT_USER}/`;
const URL_CONTACT = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_ROOT_CONTACT}/`;

@Injectable()
export class SignupApiService {

  constructor(private http: HttpClient) {
  }

  createContact(firstName:string, lastName:string, profil:object, phone:string):Promise<Contact> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(URL_CONTACT,{ firstName,lastName,profil,phone },{ headers }).toPromise();
  }
  createUser(email:string,encPwd:string,contact:Contact):Promise<User> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(URL_USER,{ mail:email,password:encPwd,contact:{ id: contact.id } },{ headers }).toPromise();
  }

}
