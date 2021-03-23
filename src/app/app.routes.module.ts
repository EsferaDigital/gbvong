import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminRoutesModule } from './admin/admin.routes.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const APP_ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'recuperar-contrasena', component: ForgotPasswordComponent},
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: '**', pathMatch: 'full', redirectTo: '/inicio'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    AdminRoutesModule
  ],
  exports: [RouterModule]
})

export class AppRoutesModule{}
