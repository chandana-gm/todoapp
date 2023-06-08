import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SighupComponent } from './sighup/sighup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AsyncEmailValidator } from 'src/app/validators/email.validator';


@NgModule({
  declarations: [
    UserComponent,
    SighupComponent,
    LoginComponent,
    HomeComponent,
    AsyncEmailValidator
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class UserModule { }
