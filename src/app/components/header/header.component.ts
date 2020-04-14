import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  showPanel(boton: any, panel: any){
    boton.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }

}
