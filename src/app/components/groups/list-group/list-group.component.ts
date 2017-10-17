import { Component, OnInit } from '@angular/core';
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  groups: Array<Group> = [];

  constructor() { }

  ngOnInit() {
      this.groups = [
          new Group('Nom de mon groupe', null),
          new Group('Nom de mon groupe', null),
          new Group('Nom de mon groupe', null),
      ];
  }

  handleGroupSelected(group): void {
      console.log(' Selected Group : ', group.toString());
  }

}
