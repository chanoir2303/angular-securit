import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SETTINGS as AUTH_SETTINGS, USE_DEVICE_LANGUAGE, LANGUAGE_CODE, PERSISTENCE } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: LANGUAGE_CODE, useValue: 'fr' },
    { provide: PERSISTENCE, useValue: 'session' },
  ]
})
export class AuthenticationModule { }
