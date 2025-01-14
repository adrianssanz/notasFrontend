import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearNotaComponent } from './modal-crear-nota.component';

describe('ModalCrearNotaComponent', () => {
  let component: ModalCrearNotaComponent;
  let fixture: ComponentFixture<ModalCrearNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
