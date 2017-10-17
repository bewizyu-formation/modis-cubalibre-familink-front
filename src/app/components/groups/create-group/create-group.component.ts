import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  groupName = new FormControl('', [Validators.required]);

  @Output()
  createGroupEvent: EventEmitter<Group> = new EventEmitter<Group>();

  constructor() {
  }

  ngOnInit() {
  }

  createGroup(groupName: string) {
    this.createGroupEvent.emit(new Group(groupName, null));
  }

  getErrorMessage() {
    return this.groupName.hasError('required') ? 'Vous devez rentrer une valeur !' : '';
  }
}
