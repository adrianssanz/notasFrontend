import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateNotaComponent } from './modal-update-nota.component';

describe('ModalUpdateNotaComponent', () => {
  let component: ModalUpdateNotaComponent;
  let fixture: ComponentFixture<ModalUpdateNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUpdateNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
