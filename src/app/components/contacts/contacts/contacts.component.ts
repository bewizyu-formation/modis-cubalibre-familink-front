import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ContactsBusinessService} from "../../../services/business/contacts-business.service";
import {Group} from "../../../models/Group";
import {Contact} from "../../../models/Contact";

@Component({
  selector: 'app-no-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  contacts: Array <Contact> ;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCreateContact() {
      this.router.navigate(['createContact']);
  }
}
