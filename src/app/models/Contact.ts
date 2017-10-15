import { Profil } from './Profil';

export class Contact{
  constructor(public name:string, public firstname:string, public profil:Profil, public phone:string, public gravatar:string = 'https://i.imgur.com/PYiHYPX.jpg',public address?:string, public zipcode?:string, public city?:string) {}
}
