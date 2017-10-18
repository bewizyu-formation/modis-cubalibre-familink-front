import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import {SigninService} from '../../services/business/signin.service';
import {Router} from "@angular/router";
import {User} from "../../models/User";
import {Profil} from "../../models/Profil";
import {Contact} from "../../models/Contact";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder, private service: SigninService, private router: Router) {

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
      let profil: Profil = new Profil(object.user.contact.profil.id, object.user.contact.profil.type, object.user.contact.profil.color);
      let contact: Contact = new Contact(object.user.contact.lastName, object.user.contact.firstName, profil, object.user.contact.phone, object.user.contact.gravatar);
      let user: User = new User(object.user.mail, contact, object.user.id);
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['group']);
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

  toSignup() {
    this.router.navigate(['signup']);
  }

  ngOnInit() {
    localStorage.clear();
  }
}
