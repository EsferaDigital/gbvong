import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroModel } from '../models/registro.model';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MiembroModel } from '../models/miembro.model';
import { VictimaModel } from '../models/victima.model';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private coleccion = 'registros';
  private recuperadosRef = 'recuperados'
  private miembrosRef = 'miembros'
  private victimasRef = 'victimas'
  recuperados: Observable<any> ;

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
    ) {
      this.recuperados = this.db.collection(this.recuperadosRef).valueChanges()
    }

  // Para obtener Regiones y comunas (datos en local)
  getDireccion(){
    return this.http.get('../../assets/docs/comunas.json');
  }

  postRegistro(registro: RegistroModel): Promise<DocumentReference> {
    return this.db.collection(this.coleccion).add(registro);
  }

  postMiembro(miembro: MiembroModel){
    return this.db.collection(this.miembrosRef).add(miembro);
  }

  postVictima(victima: VictimaModel){
    return this.db.collection(this.victimasRef).add(victima)
  }

  getRecuperados(){
    return this.recuperados;
  }

  // Lógica de validacion de patente

  // Crear en mi backend una función que retorne la patente de la base de datos (en json) o null si la patente consultada no está en la base de datos.

  // Luego puedo consultar mi backend con httpclient desde acá

  // Luego creo un servicio para las validaciones personalizadas, en otro archivo.

  // async getPatente(patenteForm: any){
  //   // Devuelve la patente consultada como string
  //   let patenteDB
  //   // Hago la consulta a la base de datos
  //   const query = await this.db.collection(this.coleccion, ref => ref.where('patente', '==', patenteForm)).valueChanges()
  //       .pipe(
              // map de rxjs
  //         map(( (resp: any) => {
  //           // Uso el map para obtener del objeto completo, solo la patente dentro del objeto
  //           return resp.map( ({patente}) => ({patente}) )
  //         }))
  //       )
  //       .subscribe(resp => {
  //         // Asigno el valor de la clave patente que está en la posición 0 de un array de objetos (en realidad hay un solo objeto dentro del array)
  //         patenteDB = resp[0].patente;
  //         // console.log(typeof(patenteDB))
  //       });
  //   // Devuelvo el valor que asigné
  //   return patenteDB;
  // }
}
