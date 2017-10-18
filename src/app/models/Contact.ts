import { Profil } from './Profil';

export class Contact{
  constructor(public lastName:string, public firstName:string, public profil:Profil, public phone:string, public gravatar:string = 'https://i.imgur.com/PYiHYPX.jpg', public id?: number, public address?:string, public zipcode?:string, public city?:string) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
