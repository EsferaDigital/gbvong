import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  ano: number = new Date().getFullYear()
  mapa: any
  showGoUpButton: boolean;
  showScrollHeight = 500;
  hideScrollHeight = 200;


  constructor(private sanitizer: DomSanitizer) {
    this.showGoUpButton = false;
    this.mapa = this.mapaResponsive()
  }

  scrollTop(){
    function easeInOutCubic(t,b,c,d){
      t /= d/2
      if(t < 1) return c/2*t*t*t + b
      t -= 2
      return c/2*(t*t*t + 2) + b
    }

    let targetPosition = 0
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 750
    let start = null

    window.requestAnimationFrame(step)

    function step(timestamp){
      if(!start) start = timestamp
      const progress = timestamp -start
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
      if(progress < duration) window.requestAnimationFrame(step)
    }
  }

  @HostListener('window:scroll', [])
    onWindowScroll(){
      if (( window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight) {
        this.showGoUpButton = true;
      } else if ( this.showGoUpButton &&
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop)
        < this.hideScrollHeight) {
        this.showGoUpButton = false;
      }
    }

  mapaResponsive(){
    let mq = window.matchMedia('(min-width: 768px)')
    let mpImg = `<a href="https://bit.ly/2Jd1PHS" target="_blank"><span class="Link-mapa">Ver en Google Maps</span><img src="../../../assets/img/mapa.jpg" alt="Mapa"></a>`

    let mpG = `<div class="Mapa-responsive">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.6258460006077!2d-71.5522778804054!3d-33.02349888679817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dde1d3a5187b%3A0x359c0e46671a5a18!2sPlaza+Latorre%2C+Vi%C3%B1a+del+Mar%2C+Regi%C3%B3n+de+Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1562272073863!5m2!1ses-419!2scl" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
      </iframe>
    </div>`

    if(mq.matches){
      this.mapa = mpG
    }else{
      this.mapa = mpImg
    }

    this.mapa = this.sanitizer.bypassSecurityTrustHtml(this.mapa)

    return this.mapa
  }
}
