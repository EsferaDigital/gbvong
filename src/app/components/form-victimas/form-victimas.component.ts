import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { VictimaModel } from '../../models/victima.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'gb-form-victimas',
  templateUrl: './form-victimas.component.html',
  styleUrls: ['./form-victimas.component.scss']
})
export class FormVictimasComponent implements OnInit {
  @Input() animamodal: string
  @Output() cierraformvictimas: EventEmitter<boolean>

  form: FormGroup
  public victima
  fechaActual = new Date()
  caracteresTextArea = 0
  expandirDonacion: boolean
  contador = 500

  constructor(
    private fb: FormBuilder,
    private datosService: DatosService
  ) {
    this.cierraformvictimas = new EventEmitter(),
    this.animamodal = 'zoom-in'

    this.victima = new VictimaModel(
      new Date(), '', '', 0, '', 0, 0, '', '', '',
      '', 0, '', '', '', '', '', false, new Date(), '', 0)
    this.crearFormulario()
  }

  ngOnInit(): void {}

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      this.cierraformvictimas.emit(false)
    })
  }

  showHideDonacion(v){
    switch (v){
      case 'si':
        this.expandirDonacion = true
        break
      case 'no':
        this.expandirDonacion = false
        break
      case 'talvez':
        this.expandirDonacion = true
        break
      default:
        this.expandirDonacion = false
    }
  }

  get nombreNoValido(){
    return this.form.get('nombres').invalid && this.form.get('nombres').touched
  }

  get rutNoValido(){
    return this.form.get('rut').invalid && this.form.get('rut').touched
  }

  get docnumberNoValido(){
    return this.form.get('docnumber').invalid && this.form.get('docnumber').touched
  }

  get mailNoValido(){
    return this.form.get('mail').invalid && this.form.get('mail').touched
  }

  get phoneNoValido(){
    return this.form.get('phone').invalid && this.form.get('phone').touched
  }

  get phone2NoValido(){
    return this.form.get('phone2').invalid && this.form.get('phone2').touched
  }

  get moviltypeNoValido(){
    return this.form.get('moviltype').invalid && this.form.get('moviltype').touched
  }

  get marcaNoValido(){
    return this.form.get('marca').invalid && this.form.get('marca').touched
  }

  get modeloNoValido(){
    return this.form.get('modelo').invalid && this.form.get('modelo').touched
  }

  get movilcolorNoValido(){
    return this.form.get('movilcolor').invalid && this.form.get('movilcolor').touched
  }

  get movilanoNoValido(){
    return this.form.get('movilano').invalid && this.form.get('movilano').touched
  }

  get patenteNoValido(){
    let patente = this.form.get('patente');
    patente.valueChanges.subscribe(() => {
      if (patente.value !== null){
        patente.patchValue(patente.value.toUpperCase(), {emitEvent: false});
      }
    })
    return this.form.get('patente').invalid && this.form.get('patente').touched
  }

  get chasisnumberNoValido(){
    return this.form.get('chasisnumber').invalid && this.form.get('chasisnumber').touched
  }

  get motornumberNoValido(){
    return this.form.get('motornumber').invalid && this.form.get('motornumber').touched
  }

  get fecharoboNoValido(){
    return this.form.get('fecharobo').invalid && this.form.get('fecharobo').touched
  }

  get direccionNoValido(){
    return this.form.get('direccion').invalid && this.form.get('direccion').touched
  }

  get moredataNoValido(){
    return this.form.get('moredata').invalid
  }

  getDisabledValue(event){
    let moredata = this.form.get('moredata').value
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

  crearFormulario(){
    this.form = this.fb.group({
      registrodate: [this.fechaActual],
      nombres: ['', [
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
      mail: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11)
      ]],
      phone2: ['', [
        Validators.minLength(9),
        Validators.maxLength(11)
      ]],
      moviltype: ['', [
        Validators.required,
        Validators.maxLength(12)
      ]],
      marca: ['', [
        Validators.required,
        Validators.maxLength(12)
      ]],
      modelo: ['', [
        Validators.required,
        Validators.maxLength(12)
      ]],
      movilcolor: ['', [
        Validators.required,
        Validators.maxLength(12)
      ]],
      movilano: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{4}$')
      ]],
      patente: ['', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9]{2,3})([a-zA-Z0-9]{2})([0-9]{0,2})$')
      ]],
      chasisnumber: ['', Validators.maxLength(17)],
      motornumber: ['', Validators.maxLength(17)],
      fecharobo: ['', Validators.required],
      direccion: ['', Validators.maxLength(100)],
      moredata: ['', Validators.maxLength(500)],
      recuperado: [false],
      fecharecuperado: [this.fechaActual],
      donacion: ['no'],
      montodonacion: ['']
    })
  }

  // Enviar miembro a la base de datos
  enviar(){
    // Guardamos en el modelo victima, el objeto que enviaremos a la base de datos
    this.victima = this.form.value

    // console.log(this.victima)

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading()

    // Posteamos los datos del formulario
    this.datosService.postVictima(this.victima)
            .then(resp => {
              Swal.fire({
                title: `Gracias ${this.victima.nombres}`,
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
