import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from "./people/people-list/people.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./authentication/forgot-password/forgot-password.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {VerifyEmailComponent} from "./authentication/verify-email/verify-email.component";


const routes: Routes = [
  { path: 'team', component: PeopleComponent },
  { path: 'sign', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
