import { Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('Header') Header;

  anima = 'slide-down';
  colorHeader: string;


  constructor() { }

  // Muestra u oculta el panel
  showPanel(boton: any, panel: any){
    boton.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }

  // Mostrar u ocultar header y cambiar color
  toggleHeader(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    // console.log(sctop)
    let st = window.pageXOffset || document.documentElement.scrollTop


    if (st > lastScrollTop){
      this.anima = 'slide-up';
      this.colorHeader = '#1F5764'
    }else if (sctop === 0){
      this.anima = 'slide-down'
      this.colorHeader = 'transparent'
    }

    lastScrollTop = st
  }

  // Navegación smooth scroll

  // Nota (se puede mejorar creando un objeto con el menu para luego recorrerlo con un *ngfor en el html)

  toGoSection(section: string, boton: any, panel: any){
    document.getElementById(section)
      .scrollIntoView({behavior: 'smooth'})
    boton.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }

// Detectar scroll
  @HostListener('window:scroll', [])
    onWindowScroll(){
      this.toggleHeader()
    }

}
