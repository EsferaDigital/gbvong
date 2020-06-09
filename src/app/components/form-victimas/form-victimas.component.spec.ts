import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVictimasComponent } from './form-victimas.component';

describe('FormVictimasComponent', () => {
  let component: FormVictimasComponent;
  let fixture: ComponentFixture<FormVictimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVictimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVictimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
