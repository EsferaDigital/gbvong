import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMiembrosComponent } from './form-miembros.component';

describe('FormMiembrosComponent', () => {
  let component: FormMiembrosComponent;
  let fixture: ComponentFixture<FormMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
