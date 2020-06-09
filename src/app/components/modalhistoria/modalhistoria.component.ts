import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'gb-modalhistoria',
  templateUrl: './modalhistoria.component.html',
  styleUrls: ['./modalhistoria.component.scss']
})
export class ModalhistoriaComponent{

  @Input() animamodal: string
  // destruye : boolean

  @Output() cerrarhistoria: EventEmitter<boolean>

  constructor() {
    this.cerrarhistoria = new EventEmitter()
    this.animamodal = 'zoom-in';
    // console.log(this.zoom)
  }


  closeModal(modal: any){
    // aqui podriamos emitir un datos al componente padre para que cambie el valor de verhistoria y con EventSource, elimine el componente modalhistoria
    this.animamodal = 'zoom-out';

    modal.addEventListener("animationend", () => {
      // console.log('animationend')
      this.cerrarhistoria.emit(false)
      // [vermodal] = false
      // Mandar un valor al componente padre (main) y desde allí destruir con un ngIf el modal
    })
  }




}
