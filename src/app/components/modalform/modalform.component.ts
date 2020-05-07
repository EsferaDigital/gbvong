import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'gb-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {

  forma: FormGroup
  ubicacion: any[] = []
  // region: any
  comunas: any[]

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService,
    private datosService: DatosService
    ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.datosService.getUbicacion()
      .subscribe( (ubicacion: any) => {
        this.ubicacion = ubicacion;

        // unshift es una funcion nativa que añade un valor al principio de un array
        this.ubicacion.unshift({
          region: 'Seleccione una Región',
          comunas: ''
        })
      })
  }

  get nombresNoValido(){
    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched
  }

  get apellidosNoValido(){
    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched
  }

  get rutNoValido(){
    return this.forma.get('rut').invalid && this.forma.get('rut').touched
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get regionNoValida(){
    return this.forma.get('direccion.region').invalid && this.forma.get('direccion.region').touched
  }

  get comunasNoValida(){
    return this.forma.get('direccion.comunas').invalid && this.forma.get('direccion.comunas').touched
  }

  get calleNoValida(){
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched
  }

  // Funcion que crea el formulario y recibe validadores
  crearFormulario(){
    this.forma = this.fb.group({
      nombres: ['', [
        Validators.required,
        Validators.minLength(5)]],
      apellidos: ['', [
        Validators.required,
        Validators.minLength(5)]],
      rut: ['', [
        Validators.required
      ]],
      docnumber: [''],
      correo: ['', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
              ]],
      direccion: this.fb.group({
        region: ['ubicacion.region', Validators.required],
        comunas: ['', Validators.required],
        calle: ['', Validators.required]
      })
    })
  }

  changeRegion(region){
    this.comunas = this.ubicacion.find(ubc => ubc.region === region).comunas

    // unshift es una funcion nativa que añade un valor al principio de un array
    this.comunas.unshift('Seleccione una comuna')
    console.log(this.comunas)
  }

  // Evento que guarda la info en base de datos
  guardar(){
    console.log(this.forma);

    // Para marcar como tocados todos los campos invalidos
    if (this.forma.invalid){

      return Object.values(this.forma.controls).forEach( control => {

        if (control instanceof FormGroup){
          Object.values(control.controls).forEach( ctrl => ctrl.markAsTouched())
        }else{
          control.markAsTouched()
        }
      })
    }

    // Posteo de la informacion a base de datos (falta)

    // Resetear el formulario
    this.forma.reset()
  }

}
