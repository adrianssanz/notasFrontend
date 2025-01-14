import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalCerrarSesionComponent } from '../modal-cerrar-sesion/modal-cerrar-sesion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private matDialog: MatDialog
  ) {}

  abrirModal() {
    this.matDialog.open(ModalCerrarSesionComponent);
  }
}
