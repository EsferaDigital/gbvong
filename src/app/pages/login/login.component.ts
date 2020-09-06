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

  onLogin(){}

}
