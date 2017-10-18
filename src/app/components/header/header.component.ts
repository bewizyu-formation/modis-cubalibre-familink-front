import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }
  user:User;
  borderTheme:string;

  logout() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.borderTheme = `solid ${this.user.contact.profil.color} 2px`;
    }
  }

}
