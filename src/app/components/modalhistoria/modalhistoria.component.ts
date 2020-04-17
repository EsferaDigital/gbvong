import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'gb-modalhistoria',
  templateUrl: './modalhistoria.component.html',
  styleUrls: ['./modalhistoria.component.scss']
})
export class ModalhistoriaComponent{

  @Input() animamodal: string
  // destruye : boolean

  @Output() vermodal: EventEmitter<boolean>

  constructor() {
    this.vermodal = new EventEmitter()
    this.animamodal = 'zoom-in';
    // console.log(this.zoom)
  }


  closeModal(modal: any){
    this.animamodal = 'zoom-out';

    modal.addEventListener("animationend", ()=>{
      console.log('animationend')
      // this.destruye = true;
      this.vermodal.emit(false)
      // [vermodal] = false
      // Mandar un valor al componente padre (main) y desde allí destruir con un ngIf el modal
    })
  }


}
