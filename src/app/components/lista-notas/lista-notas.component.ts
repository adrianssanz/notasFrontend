import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota, Respuesta, Usuario } from '../../interfaces/nota';
import { ApiService } from '../../services/api.service';
import { NotaComponent } from '../nota/nota.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearNotaComponent } from '../modal-crear-nota/modal-crear-nota.component';
import { AuthService } from '../../services/auth.service';
import { CapitalizePipe } from '../../classes/CapitalizePipe';

@Component({
  selector: 'app-lista-notas',
  imports: [CommonModule, NotaComponent, CapitalizePipe],
  templateUrl: './lista-notas.component.html',
  styleUrl: './lista-notas.component.css',
})
export class ListaNotasComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog,
    private authService: AuthService
  ) {}

  notas: Nota[] = [];
  respuesta!: Respuesta;
  pagina: number = 0;
  totalPaginas: number = 0;
  usuario!: string;

  ngOnInit(): void {
    this.cargarNotas();
    this.cargarUsuario();
  }

  abrirModalCrearNota() {
    this.matDialog.open(ModalCrearNotaComponent);
  }

  cargarUsuario(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.usuario = user.usuario;
      } else {
        console.log('No hay usuario logueado.');
      }
    });
  }

  siguientePagina(): void {
    if (this.pagina < this.totalPaginas - 1) {
      this.pagina++;
      this.cargarNotas();
    }
  }

  anteriorPagina(): void {
    if (this.pagina > 0) {
      this.pagina--;
      this.cargarNotas();
    }
  }

  cargarNotas(): void {
    this.apiService.getNotas(this.pagina).subscribe({
      next: (data) => {
        this.notas = data.notas;
        this.respuesta = data;
        this.totalPaginas = data.totalPaginas;
      },
      error: (error) => {
        console.error('Error al cargar las notas:', error);
      },
    });
  }
}
