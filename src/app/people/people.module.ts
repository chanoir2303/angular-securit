import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {PeopleComponent} from "./people-list/people.component";
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { PeopleLogComponent } from './people-log/people-log.component';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailComponent,
    PeopleLogComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class PeopleModule { }
