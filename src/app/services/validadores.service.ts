import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

// Interface solo para usar dentro de este servicio
interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {
  private coleccion = 'registros';

  constructor(
    private db: AngularFirestore
    ) { }

  async obtenerPatente(patenteForm){
    // Devuelve la patente consultada como string
    let patenteDB
    // Hago la consulta a la base de datos
    const query = await this.db.collection(this.coleccion, ref => ref.where('patente', '==', patenteForm)).valueChanges()
        .pipe(
          map(( (resp: any) => {
            // Uso el map para obtener del objeto completo, solo la patente dentro del objeto
            return resp.map( ({patente}) => ({patente}) )
          }))
        )
        .subscribe(resp => {
          // Asigno el valor de la clave patente que está en la posición 0 de un array de objetos (en realidad hay un solo objeto dentro del array)
          patenteDB = resp[0].patente;
          // console.log(typeof(patenteDB))
        });
    // Devuelvo el valor que asigné
    return patenteDB;
  }

  async existePatente(control: FormControl){
    let existe = await this.obtenerPatente(control.value)

    if (control.value === existe){
      return {
        existePatente: true
      }
    }
    return null
  }

  // existePatente(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{
  //   return new Promise( async (resolve, reject) => {
  //     let existe = await this.datos.getPatente(control.value)
  //     if (control.value === existe){
  //       resolve( {
  //         existePatente: true
  //       })
  //     } else{
  //       resolve(null)
  //     }
  //   })
  // }

  // En las validaciones personalizadas si retorna null, entonces pasa la validacion
  noHerrera(control: FormControl): {[s: string]: boolean}{
    if (control.value?.toLowerCase() === 'herrera'){
      return {
        noHerrera: true
      }
    }
    return null
  }
}
