import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/nota';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarComponent } from '../modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-lista-usuarios',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit {
  constructor(
    private usuariosService: UsuariosService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarRolUsuario();
  }

  usuarios: Usuario[] = [];
  idUser!: number;

  abrirModalConfirmar(id: number) {
        const dialogRef = this.matDialog.open(ModalConfirmarComponent, {
          data:{
            message: "¿Eliminar usuario?"
          },
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.deleteUsuario(id);
          } else {
            console.log('Acción cancelada');
          }
        });
      }

  cargarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al cargar las notas:', error);
      },
    });
  }

  cargarRolUsuario(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.idUser = user.id;
      } else {
        console.log('No hay usuario logueado.');
      }
    });
  }

  deleteUsuario(id: number): void {
    this.snackBar
      .open('Eliminando usuario...', '', {
        duration: 3000,
      })
      .afterDismissed()
      .subscribe(() => {
        this.usuariosService.deleteUsuario(id).subscribe({
          next: (data) => {
            window.location.reload();
            console.log('Usuario eliminado.');
          },
          error: (error) => {
            console.error('Error al eliminar el usuario:', error);
          },
        });
      });
  }
}
