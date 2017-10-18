import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../models/Contact";
import {Profil} from "../../../models/Profil";

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input()
  contacts: Array<Contact>;

  constructor() { }

  ngOnInit() {
    this.contacts = [
      new Contact('Contact', ' 1', new Profil(1, 'SENIOR', '#123456'), '012345678', 'https://i.imgur.com/PYiHYPX.jpg'),
      new Contact('Contact', ' 2', new Profil(1, 'SENIOR', '#123456'), '012345678', 'https://i.imgur.com/PYiHYPX.jpg'),
      new Contact('Contact', ' 3', new Profil(2, 'FAMILLE', '#000000'), '012345678', 'https://i.imgur.com/PYiHYPX.jpg'),
    ];
  }

}
