import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../pages/admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminMiembrosComponent } from './admin-miembros/admin-miembros.component';
import { AdminVictimasComponent } from './admin-victimas/admin-victimas.component';
import { AdminRutComponent } from './admin-rut/admin-rut.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'miembros', component: AdminMiembrosComponent},
      {path: 'victimas', component: AdminVictimasComponent},
      {path: 'rut', component: AdminRutComponent},
      {path: '', pathMatch: 'full', redirectTo: 'miembros'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
