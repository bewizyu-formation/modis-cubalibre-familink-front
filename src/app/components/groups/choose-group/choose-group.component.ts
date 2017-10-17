import { Component, OnInit } from '@angular/core';
import {Group} from "../../../models/Group";

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css']
})
export class ChooseGroupComponent implements OnInit {

    myGroup: Group = new Group('new Group', null);

    ngOnInit() {
    }

    addGroupToList(event) {

    }
}
