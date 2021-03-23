import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent{
  resetPasswordForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) {
      this.crearFormulario();
    }

    get emailNoValido(){
      return this.resetPasswordForm.get('email').invalid && this.resetPasswordForm.get('email').touched
    }

    crearFormulario(){
      this.resetPasswordForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]]
      })
    }

  async onReset(){
    try {
      const email = this.resetPasswordForm.value;
      console.log(email);
      this.auth.resetPassword(email)
      Swal.fire({
        icon: 'info',
        title: 'Correo enviado, revise su bandeja de entrada'
      })
      this.router.navigateByUrl('/login')
    } catch (error){
      console.log(error)
    }
  }

}
