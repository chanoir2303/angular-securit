import { Component, OnInit } from '@angular/core';
import {People} from "./people";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleList: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.peopleList = firestore.collection('people').valueChanges();
  }

  ngOnInit(): void {
  }

  // MatTableModule
  displayedColumns: string[] = ['badge', 'full-name', 'squad', 'state'];

  // select a person in table
  selectedPerson?: People;
  onSelect(people: People): void {
    this.selectedPerson = people;
  }
}
