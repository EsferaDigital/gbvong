import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { MiembroModel } from '../../models/miembro.model';

@Component({
  selector: 'gb-form-miembros',
  templateUrl: './form-miembros.component.html',
  styleUrls: ['./form-miembros.component.scss']
})
export class FormMiembrosComponent implements OnInit {
  @Input() animamodal: string
  @Output() cierraformmiembros: EventEmitter<boolean>

  form: FormGroup
  direccion = []
  comunas: any[]
  mostrarComuna = false
  mostrarTipo = false
  public miembro

  constructor(
    private fb: FormBuilder,
    private datosService: DatosService
  ) {
    this.cierraformmiembros = new EventEmitter(),
    this.animamodal = 'zoom-in',
    this.crearFormulario();
    this.miembro = new MiembroModel('',new Date(),'','',0,0,0,'','ROLE_USER','','','','')
  }

  ngOnInit(): void {
    this.datosService.getDireccion()
          .subscribe((resp: any) => {
            this.direccion = resp

            // unshift es una funcion nativa que añade un valor al principio de un array
            this.direccion.unshift({
              region: 'Seleccione una Región',
              comunas: ''
            })
          })
  }

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      // console.log('final de la animacion')
      this.cierraformmiembros.emit(false)
    })
  }

  selectTipo(v){
    this.mostrarTipo = true
  }

  changeRegion(region){
    this.comunas = this.direccion.find(rest => rest.region === region).comunas
    // unshift es una funcion nativa que añade un valor al principio de un array
    this.comunas.unshift('Seleccione una comuna')
    // console.log(this.comunas)
    this.mostrarComuna = true;
  }

  // Parece que esta función no es necesaria
  // Hay que ver el valor que captura el formulario una vez completado
  addValueTipo(v){
    let tipo = this.form.get('tipo').value
    console.log(tipo)
    console.log(v.target.value)
  }

  get regionNoValida(){
    return this.form.get('region').invalid
  }

  get comunaNoValida(){
    return this.form.get('comuna').invalid
  }

  get calleNoValida(){
    return this.form.get('calle').invalid
  }

  // Funcion que crea el formulario y recibe validadores
  crearFormulario(){
    this.form = this.fb.group({
      tipo: ['', [
        Validators.required
      ]],
      nombre: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      rut: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{1,2})\.([0-9]{3})\.([0-9]{3})\-([0-9kK]{1})$')
      ]],
      docnumber: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{3})\.([0-9]{3})\.([0-9]{3})$')
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11)
      ]],
      mail: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      calle: ['', Validators.required]
    })
  }

  // Enviar miembro a la base de datos
  enviar(){
    this.miembro = this.form.value
    console.log(this.miembro)
  }

}
