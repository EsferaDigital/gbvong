import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { MiembroModel } from '../../models/miembro.model';
import Swal from 'sweetalert2'

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
  seleccionado = ''
  public miembro
  fechaActual = new Date()

  constructor(
    private fb: FormBuilder,
    private datosService: DatosService
  ) {
    this.cierraformmiembros = new EventEmitter()
    this.animamodal = 'zoom-in'
    this.miembro = new MiembroModel(new Date(),'','','',0,0,'','ROLE_USER','','','','')
    this.crearFormulario()
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
    switch (v){
      case 'civil':
        this.mostrarTipo = false
        this.seleccionado = ""
        break
      case 'ffaa':
        this.mostrarTipo = false
        this.seleccionado = ""
        break
      case 'n':
        this.mostrarTipo = true
        this.seleccionado = "input-seleccionado"
        this.form.get('tipo').reset()
        break
      default:
        this.mostrarTipo = false
    }
  }

  get tipoNoValido(){
    return this.form.get('tipo').invalid && this.form.get('tipo').touched
  }

  get nombreNoValido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get rutNoValido(){
    return this.form.get('rut').invalid && this.form.get('rut').touched
  }

  get docnumberNoValido(){
    return this.form.get('docnumber').invalid && this.form.get('docnumber').touched
  }

  get phoneNoValido(){
    return this.form.get('phone').invalid && this.form.get('phone').touched
  }

  get mailNoValido(){
    return this.form.get('mail').invalid && this.form.get('mail').touched
  }

  changeRegion(region){
    this.comunas = this.direccion.find(rest => rest.region === region).comunas
    // unshift es una funcion nativa que añade un valor al principio de un array
    this.comunas.unshift('Seleccione una comuna')
    // console.log(this.comunas)
    this.mostrarComuna = true;
  }

  get regionNoValida(){
    return this.form.get('region').invalid && this.form.get('region').touched
  }

  get comunaNoValida(){
    return this.form.get('comuna').invalid && this.form.get('comuna').touched
  }

  get calleNoValida(){
    return this.form.get('calle').invalid && this.form.get('calle').touched
  }

  // Funcion que crea el formulario y recibe validadores
  crearFormulario(){
    this.form = this.fb.group({
      registrodate: [this.fechaActual],
      tipo: ['civil', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
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
      rol: ['ROLE_USER'],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      calle: ['', Validators.required],
      imagen: ['']
    })
  }

  // Enviar miembro a la base de datos
  enviar(){
    // Guardamos en el modelo miembro, el objeto que enviaremos a la base de datos
    this.miembro = this.form.value

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading()

    this.datosService.postMiembro(this.miembro)
              .then(resp => {
                Swal.fire({
                  title: `Gracias ${this.miembro.nombre}`,
                  text: 'Los datos se enviaron correctamente',
                  icon: 'success',
                  footer: '<a class="link-alert" href="https://t.me/joinchat/KIvX9UbS2Ukmvh2MNBHy3w" target="_blank">Únete a nuestro grupo en Telegram</a>'
                })
                // Reseteamos el formulario
                this.form.reset()
              })
              .catch(err => console.log(err))

  }


}
