import { Injectable } from '@angular/core';
import {GroupApiService} from "../api/group-api.service";
import {Group} from "../../models/Group";

@Injectable()
export class GroupBusinessService {

  groups: Array<Group> = [];

  constructor(private groupApiService: GroupApiService) { }

  postGroup(group): Promise  <Array <Group> > {
    return new Promise(
      (resolve, reject) => {
        this.groupApiService.postGroup(group)
          .then(
            (apiGroup) => {
              this.groups.push(apiGroup);
              resolve ( this.groups );
            }
          )
          .catch(
            (message) => {
              reject ( 'SERVICE - Impossible to POST !!' );
            }
          );
      }
    );
  }

}
