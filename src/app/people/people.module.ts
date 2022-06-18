import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {PeopleComponent} from "./people-list/people.component";
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  exports: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class PeopleModule { }
