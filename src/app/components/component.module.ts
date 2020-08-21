import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormMiembrosComponent } from './form-miembros/form-miembros.component';
import { FormVictimasComponent } from './form-victimas/form-victimas.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ModalformComponent } from './modalform/modalform.component';
import { ModalhistoriaComponent } from './modalhistoria/modalhistoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    FormMiembrosComponent,
    FormVictimasComponent,
    HeaderComponent,
    MainComponent,
    ModalformComponent,
    ModalhistoriaComponent
  ],
  exports: [
    FooterComponent,
    FormMiembrosComponent,
    FormVictimasComponent,
    HeaderComponent,
    MainComponent,
    ModalformComponent,
    ModalhistoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
