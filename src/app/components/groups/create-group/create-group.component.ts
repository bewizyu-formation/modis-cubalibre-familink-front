import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Group} from "../../../models/Group";
import {GroupBusinessService} from "../../../services/business/group-business.service";
import {reject} from "q";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  groupName = new FormControl('', [Validators.required]);

  group: Group = new Group('', null);

  @Output()
  newGroup: EventEmitter<Group> = new EventEmitter<Group>();

  constructor(private groupBusinessService: GroupBusinessService) {
  }

  ngOnInit() {
  }

  handleCreateGroup() {
    console.log('CREATE GROUP', this.group);

    if (this.group.name !== null) {
      this.groupBusinessService.postGroup(this.group)
        .then(
          (groups) => {
            console.log('AAAAAAAAAAAAA groups', groups);
            // let isMyGro1upExist: boolean = groups.filter(group => {
            //     return group.owner.id
            // });
            // if(groups.filter()){
            //
            // }
          }
        )
        .catch(
          (message) => {
            reject ( 'SERVICE - Impossible to POST !!' );
          }
        );
    }
  }

  getErrorMessage() {
    return this.groupName.hasError('required') ? 'Vous devez rentrer une valeur !' : '';
  }
}
