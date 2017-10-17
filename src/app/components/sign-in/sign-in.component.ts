import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  email: string;
  pwd: string;

  constructor(fb: FormBuilder) {

    this.emailCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  connect() {
    console.log(this.emailCtrl.value);
    console.log(Md5.hashStr(this.passwordCtrl.value).toString())
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
