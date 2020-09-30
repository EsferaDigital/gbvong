import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVictimaComponent } from './admin-victima.component';

describe('AdminVictimaComponent', () => {
  let component: AdminVictimaComponent;
  let fixture: ComponentFixture<AdminVictimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVictimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVictimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
