import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  // Se puede modificar para obtener datos locales o remotos

  constructor(private http: HttpClient) { }

  // Para obtener Regiones y comunas (datos en local)
  getUbicacion(){
    return this.http.get('../../assets/docs/comunas.json');
  }

  // Para obtener los datos de los vehículos robados (base de datos firebasa)
  getDataAuto(){}
}
