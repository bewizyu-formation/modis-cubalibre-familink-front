import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/Group';
import {GroupBusinessService} from "../../../services/business/group-business.service";

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent implements OnInit {

  groups: Array<Group> = [];

  constructor( private businessService: GroupBusinessService) { }

  ngOnInit() {
    this.businessService.getOwnerGroups()
      .then(
        (businessGroups) => { this.groups = businessGroups; }
      );
  }

  handleGroupSelected(group): void {
    console.log(' Selected Group : ', group.toString());
  }

}
