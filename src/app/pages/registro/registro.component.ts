import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gb-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel
  registroForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) {
    this.crearFormulario()
  }

  ngOnInit(){
    this.usuario = new UsuarioModel();
  }

  get emailNoValido(){
    return this.registroForm.get('email').invalid && this.registroForm.get('email').touched
  }

  get nombreNoValido(){
    return this.registroForm.get('nombre').invalid && this.registroForm.get('nombre').touched
  }

  get passwordNoValido(){
    return this.registroForm.get('password').invalid && this.registroForm.get('password').touched
  }

  crearFormulario(){
    this.registroForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      nombre: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  onRegistro(){
    this.usuario = this.registroForm.value

    Swal.fire({
      title: 'Espere',
      text: 'Registrando Usuario',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading()

    this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
      Swal.close()
      this.router.navigateByUrl('/login')
      console.log(resp)
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: err.error.error.message,
      })
      console.log(err.error.error.message)
    })
  }

}
