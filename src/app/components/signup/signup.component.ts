import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Profil } from '../../models/Profil';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PWD_VALIDATOR, passwordMatchValidator } from '../../validators/passwordValidator';
import { GRAVATAR_VALIDATOR } from '../../validators/gravatarValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

 // profils: Array<Profil> = [];
  selectedValue: string;
  hide = true;


  /* *************************** VALIDATORS ***************************/

  passwordGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern(PWD_VALIDATOR)]),
    passwordConfirm: new FormControl('', [Validators.required]),
  },                            passwordMatchValidator);


  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  profil = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  gravatar = new FormControl('', [Validators.pattern(GRAVATAR_VALIDATOR)]);

  constructor() {
  }

  /* *************************** MESSAGE D'ERREURS ********************/
  getErrorMessage() {
    return this.email.hasError('required') ? 'Saisir un email' :
      this.email.hasError('email') ? 'Email invalide' : '';
  }

  getPasswordErrorMessage() {
    return this.passwordGroup.get('password').hasError('required') ? 'Saisir un mot de passe' :
      this.passwordGroup.get('password').hasError('pattern') ? 'Minimum 6 caractères, une maj et un chiffre' : '';
  }

  getPasswordMatchErrorMessage() {
    return this.passwordGroup.hasError('mismatch') ? 'Les deux mots de passes ne sont pas identiques' : '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Saisir un nom' : '';
  }

  getFirstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'Saisir un prénom' : '';
  }

  getProfilErrorMessage() {
    return this.profil.hasError('required') ? 'Selectionnez un profil' : '';
  }

  getPhoneErrorMessage() {
    return this.phone.hasError('required') ? 'Saisir un numéro de téléphone' : '';
  }
  getGravatarErrorMessage(){
    return this.gravatar.hasError('pattern') ? 'Lien incorrect' : '' ;
  }


  /* profils = [
     {value: '0', viewValue: 'SENIOR'},
     {value: '1', viewValue: 'MEDECIN'},
     {value: '2', viewValue: 'FAMILLE'},
   ];
 */
  ngOnInit() {

  }
}
