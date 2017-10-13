import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Group } from "../../../models/Group";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
    groupName = new FormControl('', [Validators.required]);

    group: Group = new Group();

    constructor() {
    }

    ngOnInit() {
    }

    handleCreateGroup() {
        console.log('CREER', this.group);
    }

    getErrorMessage() {
        return this.groupName.hasError('required') ? 'Vous devez rentrer une valeur !' : '';
    }



}
