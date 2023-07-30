import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAdministradorComponent } from './pie-administrador.component';

describe('PieAdministradorComponent', () => {
  let component: PieAdministradorComponent;
  let fixture: ComponentFixture<PieAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieAdministradorComponent]
    });
    fixture = TestBed.createComponent(PieAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
