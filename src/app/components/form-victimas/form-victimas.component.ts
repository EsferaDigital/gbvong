import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gb-form-victimas',
  templateUrl: './form-victimas.component.html',
  styleUrls: ['./form-victimas.component.scss']
})
export class FormVictimasComponent implements OnInit {
  @Input() animamodal: string
  @Output() cierraformvictimas: EventEmitter<boolean>

  constructor() {
    this.cierraformvictimas = new EventEmitter(),
    this.animamodal = 'zoom-in'
  }

  ngOnInit(): void {
  }

  closeModal(modal: any){
    this.animamodal = 'zoom-out'

    modal.addEventListener('animationend', () => {
      this.cierraformvictimas.emit(false)
    })
  }

}
