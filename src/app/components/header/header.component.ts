import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Contact } from '../../models/Contact';
import { Profil } from '../../models/Profil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  user:User;
  borderTheme:string;
  ngOnInit() {
    this.user = new User('angelo67170@gmail.com','546465sdfgsd56',new Contact('Basso','Angelo',new Profil(1,'FOU','#FF0022'),'0601795131'));
    this.borderTheme = `solid ${this.user.contact.profil.color} 2px`;
  }

}
