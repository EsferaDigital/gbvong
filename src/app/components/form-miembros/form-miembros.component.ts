import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'gb-form-miembros',
  templateUrl: './form-miembros.component.html',
  styleUrls: ['./form-miembros.component.scss']
})
export class FormMiembrosComponent implements OnInit {
  @Input() animamodal: string
  @Output() cierraformmiembros: EventEmitter<boolean>

  constructor() {
    this.cierraformmiembros = new EventEmitter(),
    this.animamodal = 'zoom-in'
  }

  ngOnInit(): void {
  }

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      // console.log('final de la animacion')
      this.cierraformmiembros.emit(false)
    })
  }

}
