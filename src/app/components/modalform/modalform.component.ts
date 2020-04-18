import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'gb-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {

  forma: FormGroup

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
    ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombresNoValido(){
    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched
  }

  get apellidosNoValido(){
    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get regionNoValida(){
    return this.forma.get('direccion.region').invalid && this.forma.get('direccion.region').touched
  }

  get comunaNoValida(){
    return this.forma.get('direccion.comuna').invalid && this.forma.get('direccion.comuna').touched
  }

  get calleNoValida(){
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(5)]],
      rut: [''],
      docnumber: [''],
      correo: ['', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
              ]],
      direccion: this.fb.group({
        region: ['', Validators.required],
        comuna: ['', Validators.required],
        calle: ['', Validators.required]
      })
    })
  }

  guardar(){
    console.log(this.forma);

    // Para marcar como tocados todos los campos invalidos
    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach( control =>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched())
        }else{
          control.markAsTouched()
        }
      })
    }

    //Posteo de la informacion a base de datos

    // Resetear el formulario
    // Puedo pasarle al reset un objeto (guardado en una variable) con los valores de mi formulario que quiero que resetee
    // EJ:
    let objetoReset = {
      nombres: 'Juan Eduardo',
      apellidos: 'Zavando Sáez',
      rut: '13.448453-5',
      docnumber: '',
      correo: 'ejemplo@ejemplo.com',
      telefono: '',
      direccion: {
        region: '',
        comuna: '',
        calle: ''
      },
      motivoingreso: ''
    }

    this.forma.reset()
  }

}
