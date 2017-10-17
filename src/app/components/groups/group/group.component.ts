import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../../models/Group';

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

  constructor() { }

  ngOnInit() {
  }

  selectGroup() {
    this.groupSelected.emit(this.group);
  }
}
