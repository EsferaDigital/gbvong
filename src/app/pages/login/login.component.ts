import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'gb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.usuario = new UsuarioModel()
  }

  get emailNoValido(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched
  }

  get passwordNoValido(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched
  }

  crearFormulario(){
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  onLogin(){
    this.usuario = this.loginForm.value

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    })
    Swal.showLoading()

    this.auth.login(this.usuario).subscribe((resp: any) => {
      this.usuario.nombre = resp.displayName
      Swal.close()
      // console.log(resp.displayName)

      localStorage.setItem('email', this.usuario.email)
      localStorage.setItem('nombre', this.usuario.nombre)

      this.router.navigateByUrl('/admin/miembros')
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Correo o contraseña inválida',
      })
      // console.log(err.error.error.message)
    })
  }

}
