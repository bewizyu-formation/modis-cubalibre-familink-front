import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PWD_VALIDATOR} from '../../validators/passwordValidator';
import {GRAVATAR_VALIDATOR} from '../../validators/gravatarValidator';
import {Md5} from 'ts-md5/dist/md5';
import {EMAIL_VALIDATOR} from '../../validators/emailValidator';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {SignupService} from '../../services/business/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  selectedValue: string;
  hide = true;


  /* *************************** VALIDATORS ***************************/
  emailCtrl: FormControl;
  private passwordCtrl: FormControl;
  private confirmPasswordCtrl: FormControl;
  private nameCtrl: FormControl;
  private firstNameCtrl: FormControl;
  private profilCtrl: FormControl;
  private gravatarCtrl: FormControl;
  private addressCtrl: FormControl;
  private zipcodeCtrl: FormControl;
  private cityCtrl: FormControl;
  private phoneCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder, public router: Router,private service:SignupService) {

    this.emailCtrl = fb.control('', [Validators.required, Validators.pattern(EMAIL_VALIDATOR), Validators.email]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern(PWD_VALIDATOR)]);
    this.confirmPasswordCtrl = fb.control('', [Validators.required, Validators.pattern(PWD_VALIDATOR)]);
    this.nameCtrl = fb.control('', [Validators.required]);
    this.firstNameCtrl = fb.control('', [Validators.required]);
    this.profilCtrl = fb.control('', [Validators.required]);
    this.gravatarCtrl = fb.control('', [Validators.pattern(GRAVATAR_VALIDATOR)]);
    this.phoneCtrl = fb.control('', [Validators.required]);
    this.addressCtrl = fb.control('');
    this.zipcodeCtrl = fb.control('');


    this.userForm = fb.group({

      email: this.emailCtrl,
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl,
      name: this.nameCtrl,
      firstName: this.firstNameCtrl,
      profil: this.profilCtrl,
      gravatar: this.gravatarCtrl,
      address: this.addressCtrl,
      zipcode: this.zipcodeCtrl,
      city: this.cityCtrl,
      phone: this.phoneCtrl,
    });
  }
  userToInsert:User;
  createUser() {
    this.service.createContact(this.userForm.value.firstName,this.userForm.value.name,{ id:parseInt(this.userForm.value.profil,0) },this.userForm.value.phone).then(contact => {
      this.service.createUser(this.userForm.value.email,Md5.hashStr(this.userForm.value.password).toString(),contact).then(user=>{
        this.router.navigate(['']);
      })
    });
  }

  /* **************************** NGONINIT *********************/

  ngOnInit() {
  }

  /* *************************** MESSAGE D'ERREURS ********************/
  getEmailErrorMessage() {
    return this.userForm.get('email').hasError('required') ? 'Saisir un email' :
      this.userForm.get('email').hasError('email') ? 'Email invalide' :
        this.userForm.get('email').hasError('pattern') ? 'Veuillez saisir un mail valide' : '';
  }

  getPasswordErrorMessage() {
    return this.userForm.get('password').hasError('required') ? 'Saisir un mot de passe' :
      this.userForm.get('password').hasError('pattern') ? 'Minimum 6 caractères, une maj et un chiffre' : '';
  }

  getPasswordMatchErrorMessage() {
    return this.userForm.get('confirmPassword').hasError('mismatch') ? 'Les deux mots de passes ne sont pas identiques' :
      this.userForm.get('confirmPassword').hasError('pattern') ? 'Minimum 6 caractères, une maj et un chiffre' : '';
  }

  getNameErrorMessage() {
    return this.userForm.get('name').hasError('required') ? 'Saisir un nom' : '';
  }

  getFirstNameErrorMessage() {
    return this.userForm.get('firstName').hasError('required') ? 'Saisir un prénom' : '';
  }

  getProfilErrorMessage() {
    return this.userForm.get('profil').hasError('required') ? 'Selectionnez un profil' : '';
  }

  getPhoneErrorMessage() {
    return this.userForm.get('phone').hasError('required') ? 'Saisir un numéro de téléphone' : '';
  }

  getGravatarErrorMessage() {
    return this.userForm.get('gravatar').hasError('pattern') ? 'Lien incorrect' : '';
  }

  /* ************************* NAVIGATE **************************/
  navigateToHome() {
    this.router.navigate(['home']);
  }


  profils = [
    { value: '1', type: 'SENIOR' },
    { value: '2', type: 'MEDECIN' },
    { value: '3', type: 'FAMILLE' },
  ];

}
