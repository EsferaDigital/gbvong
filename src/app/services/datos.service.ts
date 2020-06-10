import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroModel } from '../models/registro.model';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private coleccion = 'registros';
  private recuperadosRef = 'recuperados'
  recuperados: Observable<any> ;

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
    ) {
      this.recuperados = this.db.collection(this.recuperadosRef).valueChanges();
    }

  // Para obtener Regiones y comunas (datos en local)
  getDireccion(){
    return this.http.get('../../assets/docs/comunas.json');
  }

  postRegistro(registro: RegistroModel): Promise<DocumentReference> {
    return this.db.collection(this.coleccion).add(registro);
  }

  getRecuperados(){
    return this.recuperados;
  }

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
