import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { RegistroModel } from '../../models/registro.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'gb-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {
  @Input() animamodal: string
  @Output() closeform: EventEmitter<boolean>

  forma: FormGroup
  ubicacion: any[] = []
  mostrarComuna = false
  comunas: any[]
  expandirForm = "elemento-oculto"
  expandirDonacion: boolean
  registro = new RegistroModel()
  caracteresTextArea = 0
  contador = 500

  constructor(
    private fb: FormBuilder,
    private datosService: DatosService
    ) {
    this.closeform = new EventEmitter(),
    this.animamodal = 'zoom-in',
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

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      // console.log('final de la animacion')
      this.closeform.emit(false)
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

  get docnumberNoValido(){
    return this.forma.get('docnumber').invalid && this.forma.get('docnumber').touched
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

  get telefonoNoValido(){
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched
  }

  get moredataNoValido(){
    return this.forma.get('moredata').invalid
  }

  get correoNoValido(){
    let correo = this.forma.get('correo');
    correo.valueChanges.subscribe(() => {
      correo.patchValue(correo.value.toLowerCase(), {emitEvent: false});
    })
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  getDisabledValue(event){
    let moredata = this.forma.get('moredata').value
    this.caracteresTextArea = moredata.length
    if (event.isTrusted && event.key !== 'Backspace'){
      this.contador = this.contador - 1
    }
    if (this.contador >= 0 && this.contador <= 499 && event.key === 'Backspace'){
      this.contador = this.contador + 1
    }
    if (this.caracteresTextArea >= 499){
      this.contador = 0
    }
  }

  get patenteNoValida(){
    let patente = this.forma.get('patente');
    patente.valueChanges.subscribe(() => {
      patente.patchValue(patente.value.toUpperCase(), {emitEvent: false});
    })
    return this.forma.get('patente').invalid && this.forma.get('patente').touched
  }

  // Funcion que crea el formulario y recibe validadores
  crearFormulario(){
    this.forma = this.fb.group({
      nombres: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      apellidos: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      rut: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{1,2})\.([0-9]{3})\.([0-9]{3})\-([0-9kK]{1})$')
      ]],
      docnumber: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{3})\.([0-9]{3})\.([0-9]{3})$')
      ]],
      direccion: this.fb.group({
        region: ['', Validators.required],
        comunas: ['', Validators.required],
        calle: ['', Validators.required]
      }),
      telefono: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11)
      ]],
      correo: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      motivo: ['Me interesa colaborar como civil', [
        Validators.required
      ]],
      patente: ['', [
        Validators.maxLength(6),
        Validators.pattern('^([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([0-9]{2})$')
      ]],
      moredata: ['', Validators.maxLength(500)],
      donacion: ['No'],
      montodonacion: [''],
    })
  }

  changeRegion(region){
    this.comunas = this.ubicacion.find(ubc => ubc.region === region).comunas
    // unshift es una funcion nativa que añade un valor al principio de un array
    this.comunas.unshift('Seleccione una comuna')
    // console.log(this.comunas)
    this.mostrarComuna = true;
  }

  showHideDonacion(v){
    switch (v){
      case 'Si':
        this.expandirDonacion = true
        break
      case 'No':
        this.expandirDonacion = false
        break
      case 'Tal vez':
        this.expandirDonacion = true
        break
      default:
        this.expandirDonacion = false
    }
  }

  scrollToElement(elemento: HTMLElement){
    this.expandirForm = 'elemento-visible'

    setTimeout( () => {
      elemento.scrollIntoView({behavior: 'smooth'})
    }, 500);

    // elemento.scrollIntoView({behavior: 'smooth'})
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

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading()

    // Guardamos en el modelo registro, el objeto que enviaremos a base de datos
    this.registro = this.forma.value

    // // Reservamos un Observable en la variable peticion
    // let posteo: Observable<any>
    // Posteamos el registro ejecutando la funcion postRegistro del servicio datosService
    this.datosService.postRegistro(this.registro)
          .then(resp => {
            Swal.fire({
              title: `Gracias ${this.registro.nombres}`,
              text: 'Los datos se enviaron correctamente',
              icon: 'success'
            })
            // // Resetear el formulario
            this.forma.reset()
          })
          .catch(err => console.error(err));
  }

}

