import { Component} from '@angular/core';


@Component({
  selector: 'gb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  verhistoria : boolean;
  verformulario: boolean;


  // el valor de modal debe ser = al valor de lo que recibamos del modal historia o modal formulario

  constructor() { }




  mostrarHistoria(){
    this.verhistoria = true;
  }

  mostrarFormulario(){
    this.verformulario = true;
  }

  ocultarFormulario(dato: boolean){
    this.verformulario = dato;
  }

  ocultarHistoria(dato: boolean){
    this.verhistoria = dato;
  }


}
