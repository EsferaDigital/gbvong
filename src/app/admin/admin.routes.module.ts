import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../pages/admin/admin.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistroComponent } from '../pages/registro/registro.component';
import { BusquedasComponent } from '../pages/busquedas/busquedas.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'busquedas', component: BusquedasComponent},
      {path: '', pathMatch: 'full', redirectTo: 'login'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutesModule {}
