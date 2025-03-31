import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataModule } from '../../data/user-data/user-data.module';





@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
   FormsModule,
   ReactiveFormsModule,
   UserDataModule
    
  ]
})
export class AuthModule { }
