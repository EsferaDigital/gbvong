import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MiembroModel } from '../models/miembro.model';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  miembrosCollection = "miembros"
  primerDoc: MiembroModel
  ultimoDoc: MiembroModel
  miembros: MiembroModel[]
  miembro

  constructor(
    public db: AngularFirestore
  ) { }

  getMiembros(){  }
}
