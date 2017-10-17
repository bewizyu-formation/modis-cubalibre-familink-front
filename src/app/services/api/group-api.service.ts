import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../../models/Group';
import 'rxjs/add/operator/toPromise';

const API_BASE_URL = 'http://localhost:8080/familink-api/mvc/';
const API_GROUP = 'group/';

@Injectable()
export class GroupApiService {

  constructor (private httpClient: HttpClient) { }

  postGroup(group): Promise <Group> {
    const headers = new HttpHeaders().set('Authorization', window.localStorage.getItem('authToken'))
      .set('Content-Type', 'application/json');

    return this.httpClient.post(`${API_BASE_URL}${API_GROUP}`, group, { headers }).toPromise();
  }
}
