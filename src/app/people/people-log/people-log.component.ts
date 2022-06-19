import {Component, Input, OnInit} from '@angular/core';
import {People} from "../people-list/people";

@Component({
  selector: 'app-people-log',
  templateUrl: './people-log.component.html',
  styleUrls: ['./people-log.component.css']
})
export class PeopleLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() people?: People;

}
