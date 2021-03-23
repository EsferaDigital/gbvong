import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from '../admin/admin.module';
import { ComponentModule } from '../components/component.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    InicioComponent,
    AdminComponent,
    ForgotPasswordComponent
  ],
  exports: [
    InicioComponent,
    AdminComponent,
    ForgotPasswordComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    ComponentModule,
    RouterModule
  ]
})
export class PagesModule { }
