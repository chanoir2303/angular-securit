import { Component, OnInit } from '@angular/core';
import {PEOPLE_LIST} from "../mock-people";
import {People} from "./people";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // mock-people.ts data
  peopleList = PEOPLE_LIST;

  // MatTableModule
  displayedColumns: string[] = ['badge', 'full-name', 'squad', 'state'];

  // select a person in table
  selectedPerson?: People;
  onSelect(people: People): void {
    this.selectedPerson = people;
  }
}
