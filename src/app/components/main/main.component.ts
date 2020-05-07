import { Component} from '@angular/core';


@Component({
  selector: 'gb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  verhistoria: boolean;
  // Formulario por defecto en true para mostrarlo mientras lo diseño
  // tslint:disable-next-line: no-inferrable-types
  verformulario: boolean = true;


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
