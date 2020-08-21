import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'gb-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.registroForm = this.fb.group({
      nombreUsuario: ['', [
        Validators.required
      ]]
    })
  }

  onRegistro(){}

}
