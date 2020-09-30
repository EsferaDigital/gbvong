import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMiembroComponent } from './admin-miembro.component';

describe('AdminMiembroComponent', () => {
  let component: AdminMiembroComponent;
  let fixture: ComponentFixture<AdminMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
