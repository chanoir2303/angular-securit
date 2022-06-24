import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from "./people/people-list/people.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";

const routes: Routes = [
  { path: 'team', component: PeopleComponent },
  { path: 'sign', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
