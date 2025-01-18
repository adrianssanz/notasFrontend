import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarComponent } from '../modal-confirmar/modal-confirmar.component';
import { ModalCrearNotaComponent } from '../modal-crear-nota/modal-crear-nota.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarRolUsuario();
  }

  rolUser!: number;

  abrirModalConfirmar() {
    const dialogRef = this.matDialog.open(ModalConfirmarComponent, {
      data:{
        message: "¿Cerrar sesión?"
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logOut();
      } else {
        console.log('Acción cancelada');
      }
    });
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

  logOut() {
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
          console.log("Sesión cerrada.");
        });
      });
  }
}
