import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../../models/Group';
import 'rxjs/add/operator/toPromise';

const API_BASE_URL = 'http://localhost:8080/familink-api/mvc/';
const API_GROUP = 'group/';

const API_SRV_URL = 'http://localhost';
const API_SRV_PORT = 8080;
const API_BASE_URI = 'familink-api/mvc';
const API_SRV_GROUP = 'group';
const API_SRV_GROUPS = 'groups';
const URL_GROUP = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_GROUP}/`;
const URL_GROUPS = `${API_SRV_URL}:${API_SRV_PORT}/${API_BASE_URI}/${API_SRV_GROUPS}/`;

@Injectable()
export class GroupApiService {

  constructor (private httpClient: HttpClient) { }

  postGroup(group): Promise <Group> {
    const headers = new HttpHeaders().set('Authorization', window.localStorage.getItem('authToken'))
      .set('Content-Type', 'application/json');

    return this.httpClient.post(URL_GROUP, group, { headers }).toPromise();
  }

  getOwnerGroups(): Promise  <Array <Group> >  {
    const headers = new HttpHeaders().set('Authorization', window.localStorage.getItem('authToken'))
      .set('Content-Type', 'application/json');

    return this.httpClient.get(URL_GROUPS, { headers }).toPromise();
  }
}
