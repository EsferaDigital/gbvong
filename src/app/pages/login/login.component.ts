import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'gb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.loginForm = this.fb.group({
      nombreUsuario: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  onLogin(){}

}
