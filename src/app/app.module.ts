import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BusquedasComponent } from './pages/busquedas/busquedas.component';

// Rutas
import { AppRoutesModule } from './app.routes.module';

// Modulos
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { PagesModule } from './pages/pages.module';

// Ambiente
import { environment } from '../environments/environment';
import { ComponentModule } from './components/component.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BusquedasComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ComponentModule,
    AppRoutesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
