import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MiembroModel } from '../../models/miembro.model';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'gb-admin-miembro',
  templateUrl: './admin-miembro.component.html',
  styleUrls: ['./admin-miembro.component.scss']
})
export class AdminMiembroComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    public miembrosService: MiembrosService
  ) {
    this.crearFormulario()
  }

  ngOnInit(): void {}



  crearFormulario(){
    this.form = this.fb.group({})
  }

  guardar(){  }

}
