import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminBusquedasComponent } from './admin-busquedas/admin-busquedas.component';
import { AdminMiembrosComponent } from './admin-miembros/admin-miembros.component';
import { AdminVictimasComponent } from './admin-victimas/admin-victimas.component';
import { AdminRutComponent } from './admin-rut/admin-rut.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBusquedasComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBusquedasComponent,
    AdminMiembrosComponent,
    AdminVictimasComponent,
    AdminRutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
