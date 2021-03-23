import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// Rutas
import { AppRoutesModule } from './app.routes.module';

// Modulos
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { PagesModule } from './pages/pages.module';
import { ComponentModule } from './components/component.module';
import { AdminModule } from './admin/admin.module';

// Ambiente
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ComponentModule,
    AppRoutesModule,
    AdminModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
