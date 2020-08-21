import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminRoutesModule } from './admin/admin.routes.module';

const APP_ROUTES: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
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
