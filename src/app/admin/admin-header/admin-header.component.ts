import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gb-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  // Muestra u oculta el panel
  muestraPanel(boton: any, panel: any){
    boton.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout()
    this.router.navigateByUrl('/inicio')
  }

}
