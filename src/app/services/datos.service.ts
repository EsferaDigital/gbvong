import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { RegistroModel } from '../models/registro.model';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private url = 'https://crud-gbvong.firebaseio.com'
  constructor(private http: HttpClient) { }

  // Para obtener Regiones y comunas (datos en local)
  getUbicacion(){
    return this.http.get('../../assets/docs/comunas.json');
  }

  // Para obtener los registros de socios y víctimas de los vehículos robados (base de datos firebase)
  // el backend nos responde con el id del objeto posteado en base de datos
  postRegistro(registro: RegistroModel){
    return this.http.post(`${this.url}/registros.json`, registro)
                      .pipe(
                        map( (resp: any) => {
                          registro.id = resp.name
                          return registro
                        })
                      )
  }
}
