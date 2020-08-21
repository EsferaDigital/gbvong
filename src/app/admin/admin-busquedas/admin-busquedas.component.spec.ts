import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusquedasComponent } from './admin-busquedas.component';

describe('AdminBusquedasComponent', () => {
  let component: AdminBusquedasComponent;
  let fixture: ComponentFixture<AdminBusquedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBusquedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
