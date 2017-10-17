import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../../models/User";

const API_SRV_URL = 'http://localhost';
const API_SRV_PORT = 8080;
const API_BASE_URI = 'familink-api/mvc';
const API_SRV_ROOT = 'auth';
const URL = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_ROOT}/`;

@Injectable()
export class SignupApiService {

  constructor(private http: HttpClient) {
  }/*
  email: string,
  password: string,
  name: string,
  firstName: string,
  profil: string,
  gravatar: string,
  address: string,
  zipcode: string,
  city: string,
  phone: string*/

  signup():Promise<User>{
    return http.post()
  }

}
