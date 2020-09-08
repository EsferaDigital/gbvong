import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMiembrosComponent } from './admin-miembros/admin-miembros.component';
import { AdminVictimasComponent } from './admin-victimas/admin-victimas.component';
import { AdminRutComponent } from './admin-rut/admin-rut.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
