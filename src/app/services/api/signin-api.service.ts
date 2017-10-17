import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const API_SRV_URL = 'http://localhost';
const API_SRV_PORT = 8081;
const API_BASE_URI = 'familink-api/mvc';
const API_SRV_ROOT = 'auth';
const URL = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_ROOT}/`;

@Injectable()
export class SigninApiService {
  constructor(private http: HttpClient) {
  }

  signin(email: string, encPwd: string): Promise<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(URL, { mail: email, password: encPwd }, { headers }).toPromise();
  }
}
