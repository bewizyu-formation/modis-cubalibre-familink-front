import { Component, OnInit } from '@angular/core';
import { GroupBusinessService } from '../../../services/business/group-business.service';
import { reject } from 'q';
import { Group } from '../../../models/Group';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css'],
})
export class ChooseGroupComponent implements OnInit {

  myGroup: Group;
  groups:Array<Group>;
  constructor(private groupBusinessService: GroupBusinessService) {
  }

  ngOnInit() {
  }

  createGroup(group) {
    if (group) {
      this.groupBusinessService.postGroup(group)
        .then(
          (groups) => {
            if (groups.length > 0) {
              this.myGroup = new Group(groups[0].name,  groups[0].owner);
            }
          },
        )
        .catch(
          (message) => {
            reject('SERVICE - Impossible to POST !!');
          },
        );
    }
  }
}





