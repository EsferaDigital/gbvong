import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('btnpanel', {read: ElementRef}) btnpanel: ElementRef;

  constructor(private renderer: Renderer2) { }

}
