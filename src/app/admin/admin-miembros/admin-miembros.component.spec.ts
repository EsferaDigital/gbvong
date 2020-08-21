import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMiembrosComponent } from './admin-miembros.component';

describe('AdminMiembrosComponent', () => {
  let component: AdminMiembrosComponent;
  let fixture: ComponentFixture<AdminMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
