import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ModalformComponent } from './components/modalform/modalform.component';
import { ModalhistoriaComponent } from './components/modalhistoria/modalhistoria.component';

// Modulos
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormMiembrosComponent } from './components/form-miembros/form-miembros.component';
import { FormVictimasComponent } from './components/form-victimas/form-victimas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ModalformComponent,
    ModalhistoriaComponent,
    FormMiembrosComponent,
    FormVictimasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
