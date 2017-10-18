import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Md5} from "ts-md5/dist/md5";
import {SigninService} from "../../services/business/signin.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder, private service: SigninService) {

    this.emailCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  connect() {
    this.service.signin(this.emailCtrl.value, Md5.hashStr(this.passwordCtrl.value).toString()).then(object => {
      localStorage.setItem('authToken', object.token);
      let decodeToken = atob(object.token);
      localStorage.setItem('userId', decodeToken.substring(0, decodeToken.indexOf('-')));
    })
  }

  keyEvent(event) {
    if (event.keyCode === 13) {
      this.connect();
    }
  }


  getEmailErrorMessage() {
    return this.emailCtrl.hasError('required') ? 'Vous devez rentrer un email !' : '';
  }

  getPassErrorMessage() {
    return this.passwordCtrl.hasError('required') ? 'Vous devez rentrer un password!' : '';
  }

  ngOnInit() {
  }
}
