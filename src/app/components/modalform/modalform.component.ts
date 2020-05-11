import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { RegistroModel } from '../../models/registro.model';

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
      console.log('final de la animacion')
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

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get patenteNoValida(){
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
        Validators.required
      ]],
      docnumber: ['', [
        Validators.required
      ]],
      direccion: this.fb.group({
        region: ['', Validators.required],
        comunas: ['', Validators.required],
        calle: ['', Validators.required]
      }),
      telefono: ['', [
        Validators.required
      ]],
      correo: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      motivo: ['Me interesa colaborar como civil', [
        Validators.required
      ]],
      patente: [''],
      moredata: [''],
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
    // console.log(this.forma);

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

    // Guardamos en el modelo registro, el objeto que enviaremos a base de datos
    this.registro = this.forma.value

    // Posteamos el registro ejecutando la funcion postRegistro del servicio datosService
    this.datosService.postRegistro(this.registro)
                        .subscribe( resp => {
                          console.log(resp)
                          this.registro = resp
                        })

    console.log(this.forma)
    console.log(this.registro)

    // Posteo de la informacion a base de datos (falta)

    // this.datosService.postRegistro(this.forma.value)
    //         .subscribe( resp => {
    //           console.log(resp)
    //         })

    // // Resetear el formulario
    // this.forma.reset()
  }

}
// \. Para pedir que la expresion lleve un punto en x posición de la expresión
// Para pedir que lleve numeros del 0 al 9 en x posicion de la expresión

// (12) si quisiera que tomara exactamente el número 12
// (hola|mundo) Si quisiera que tomara exactamente hola y mundo

// No puede haber nada antes de este simbolo ^
// No puede haber nada después de este simbolo $
// let regExRut = /^[0-9]{1,2}\.[0-9]{1}[0-9]{1}[0-9]{1}\.[0-9]{1}[0-9]{1}[0-9]{1}\-[0-9kK]{1}$/
