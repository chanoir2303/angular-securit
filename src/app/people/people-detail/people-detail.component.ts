import {Component, Input, OnInit} from '@angular/core';
import {People} from "../people-list/people";

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() people?: People;

}
