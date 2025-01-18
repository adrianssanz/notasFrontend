import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalCerrarSesionComponent } from '../modal-cerrar-sesion/modal-cerrar-sesion.component';
import { ModalCrearNotaComponent } from '../modal-crear-nota/modal-crear-nota.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  rolUser!: number;

  abrirModalCerrarSesion() {
    this.matDialog.open(ModalCerrarSesionComponent);
  }

  abrirModalCrearNota() {
    this.matDialog.open(ModalCrearNotaComponent);
  }

  verificarRutaDashboard() {
    return this.router.url === '/dashboard'; 
  }

  verificarRutaUsuarios() {
    return this.router.url === '/usuarios'; 
  }

  cargarRolUsuario(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.rolUser = user.rol.id;
        console.log(this.rolUser)
      } else {
        console.log('No hay usuario logueado.');
      }
    });
  }
}
