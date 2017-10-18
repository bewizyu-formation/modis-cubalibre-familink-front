import { Injectable } from '@angular/core';
import { SigninApiService } from '../api/signin-api.service';

@Injectable()
export class SigninService {

  constructor(private api: SigninApiService) {
  }

  signin(email: string, encPwd: string): Promise<any> {
    return new Promise(resolve => {
      this.api.signin(email, encPwd).then(token => {
        resolve(token);
      }).catch(e => {
        console.log(e.message);
      });
    });
  }
}
