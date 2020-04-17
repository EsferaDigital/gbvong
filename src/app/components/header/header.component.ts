import { Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('Header') Header;

  anima : string = 'slide-down';
  colorHeader : string;

  // header: any = document.getElementById('Header')

  constructor() { }

  //Muestra u oculta el panel
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


    if(st > lastScrollTop){
      this.anima = 'slide-up';
      this.colorHeader = '#1F5764'
    }else if(sctop === 0){
      this.anima = 'slide-down'
      this.colorHeader = 'transparent'
    }

    lastScrollTop = st
  }

  // Navegación smooth scroll

  // Nota (se puede mejorar creando un objeto con el menu para luego recorrerlo con un *nGfor en el html)

  toGoSection(section: string){
    document.getElementById(section)
      .scrollIntoView({behavior: 'smooth'})
  }

// Detectar scroll
  @HostListener('window:scroll', [])
    onWindowScroll(){
      this.toggleHeader()
    }

}
