import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cerrarModal(): void {
    this.matDialogRef.close(); // Cierra el modal
  }

  logOut() {
    this.matDialogRef.close();
    this.snackBar
      .open('Cerrando sesión', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe(() => {
        this.authService.logout().subscribe(() => {
          this.router.navigate(['/']);
        });
      });
  }
}
