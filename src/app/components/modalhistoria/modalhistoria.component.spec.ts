import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalhistoriaComponent } from './modalhistoria.component';

describe('ModalhistoriaComponent', () => {
  let component: ModalhistoriaComponent;
  let fixture: ComponentFixture<ModalhistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalhistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalhistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
