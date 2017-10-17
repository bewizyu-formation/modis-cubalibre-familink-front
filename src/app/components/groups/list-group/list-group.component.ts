import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/Group';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent implements OnInit {

  groups: Array<Group> = [];

  constructor() { }

  ngOnInit() {
    this.groups = [
      new Group('Group 1', null),
      new Group('Group 2', null),
      new Group('Group 3', null),
    ];
  }

  handleGroupSelected(group): void {
    console.log(' Selected Group : ', group.toString());
  }

}
