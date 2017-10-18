import { Injectable } from '@angular/core';
import { Group } from "../../models/Group";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const API_SRV_URL = 'http://localhost';
const API_SRV_PORT = 8080;
const API_BASE_URI = 'familink-api/mvc';
const API_SRV_ROOT = 'groups/';
const URL = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_ROOT}/`;

@Injectable()
export class ContactsApiService {

  constructor(private httpClient: HttpClient) { }

  getOwnerGroups(): Promise  <Array <Group> >  {
    const headers = new HttpHeaders().set('Authorization', window.localStorage.getItem('authToken'))
      .set('Content-Type', 'application/json');

    return this.httpClient.get(URL, { headers }).toPromise();
  }
}
