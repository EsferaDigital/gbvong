import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'gb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() vermodal: Boolean
  @Output() animamodal: EventEmitter<string>
  mostrarHistoria: Boolean
  mostrarForm: Boolean

  // el valor de modal debe ser = al valor de lo que recibamos del modal historia o modal formulario

  constructor() {
    this.animamodal = new EventEmitter()
  }

  modalHistoria(ver: boolean){
    // Muestra o destruye segun el valor de estas variables y usando ngIf
    this.animamodal.emit('zoom-out')
    this.vermodal = ver
    console.log(this.vermodal)
    this.mostrarHistoria = ver
  }


}
