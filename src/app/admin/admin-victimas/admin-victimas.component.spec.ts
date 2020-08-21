import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVictimasComponent } from './admin-victimas.component';

describe('AdminVictimasComponent', () => {
  let component: AdminVictimasComponent;
  let fixture: ComponentFixture<AdminVictimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVictimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVictimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
