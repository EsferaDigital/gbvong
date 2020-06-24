import { Component, OnInit} from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'gb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  recuperados = 1350

  verhistoria: boolean
  // verormulario por defecto en true para mostrarlo mientras lo diseño
  // tslint:disable-next-line: no-inferrable-types
  verformvictimas: boolean

  verformmiembros: boolean
  viejasVictimas: Array<any>


  // el valor de modal debe ser = al valor de lo que recibamos del modal historia o modal formulario

  constructor(public datosService: DatosService) { }

  ngOnInit(){
    this.datosService.getRecuperados().subscribe(
      resp => {
      this.recuperados = resp[0].total;
    })

    // this.datosService.getRegistros().subscribe(resp => {
    //   console.log(resp)

    //   this.viejasVictimas = resp.filter(item => {
    //     return item.patente === ''
    //   })

    //   console.log(this.viejasVictimas)
    // })
  }

  mostrarFormMiembros(){
    this.verformmiembros = true;
  }

  ocultarFormMiembros(dato: boolean){
    this.verformmiembros = dato;
  }

  mostrarFormVictimas(){
    this.verformvictimas = true;
  }

  ocultarFormVictimas(dato: boolean){
    this.verformvictimas = dato
  }

  mostrarHistoria(){
    this.verhistoria = true;
  }

  ocultarHistoria(dato: boolean){
    this.verhistoria = dato;
  }


}
