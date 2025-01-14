import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cerrar-sesion',
  imports: [CommonModule],
  templateUrl: './modal-cerrar-sesion.component.html',
  styleUrl: './modal-cerrar-sesion.component.css',
})
export class ModalCerrarSesionComponent {
  constructor(
    public matDialogRef: MatDialogRef<ModalCerrarSesionComponent>,
    private authService: AuthService,
    private router: Router
  ) {}

  cerrarModal(): void {
    this.matDialogRef.close(); // Cierra el modal
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.matDialogRef.close()
      this.router.navigate(['/']);
    });
  }
}
