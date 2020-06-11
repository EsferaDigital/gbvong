import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { VictimaModel } from '../../models/victima.model';

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

  constructor(
    private fb: FormBuilder,
    private datosService: DatosService
  ) {
    this.cierraformvictimas = new EventEmitter(),
    this.animamodal = 'zoom-in'

    this.victima = new VictimaModel(
      '', new Date(), '', '', 0, '', 0, 0, '', '', '',
      '', 0, '', '', '', '', '', false, new Date(), '', 0
    )
  }

  ngOnInit(): void {
  }

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      this.cierraformvictimas.emit(false)
    })
  }

}
