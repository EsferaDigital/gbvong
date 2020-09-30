import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMiembrosComponent } from './admin-miembros/admin-miembros.component';
import { AdminVictimasComponent } from './admin-victimas/admin-victimas.component';
import { AdminRutComponent } from './admin-rut/admin-rut.component';
import { RouterModule } from '@angular/router';
import { AdminMiembroComponent } from './admin-miembro/admin-miembro.component';
import { AdminVictimaComponent } from './admin-victima/admin-victima.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent,
    AdminMiembroComponent,
    AdminVictimaComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent,
    AdminMiembroComponent,
    AdminVictimaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
