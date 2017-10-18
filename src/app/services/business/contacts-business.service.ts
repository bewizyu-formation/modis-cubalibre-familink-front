import { Injectable } from '@angular/core';
import {ContactsApiService} from "../api/contacts-api.service";
import {reject} from "q";
import {Group} from "../../models/Group";

@Injectable()
export class ContactsBusinessService {

  groups: Array<Group> = [];

  constructor(private api: ContactsApiService) { }

  getOwnerGroups():  Promise <Array <Group> >  {
    return new Promise(resolve => {
      this.api.getOwnerGroups()
        .then(
          (apiGroups) => {

              this.groups = [...apiGroups];
              resolve ( this.groups );
          }
        )
        .catch(
          (message) => {
            reject ('SERVICE - Impossible to GET groups !!');
          },
        );
    });
  }

}
