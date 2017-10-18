import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../../models/Group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {

  @Input()
  group: Group;

  @Output()
  groupSelected: EventEmitter<Group> = new EventEmitter<Group>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToContacts() {
      this.router.navigate(['contacts']);
  }
}
