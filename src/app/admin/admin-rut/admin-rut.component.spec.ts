import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRutComponent } from './admin-rut.component';

describe('AdminRutComponent', () => {
  let component: AdminRutComponent;
  let fixture: ComponentFixture<AdminRutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
