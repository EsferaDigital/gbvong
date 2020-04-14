import { Component } from '@angular/core';


@Component({
  selector: 'gb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  modal: Boolean
  mostrarHistoria: Boolean
  mostrarForm: Boolean

  constructor() {
    this.modal = false
    this.mostrarHistoria = false
    this.mostrarForm = false
  }

  modalHistoria(){
    this.modal = true
    this.mostrarHistoria = true
  }


}
