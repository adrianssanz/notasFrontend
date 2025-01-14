import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { ApiService } from '../../services/api.service';
import { NotaComponent } from '../nota/nota.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearNotaComponent } from '../modal-crear-nota/modal-crear-nota.component';

@Component({
  selector: 'app-lista-notas',
  imports: [CommonModule, NotaComponent],
  templateUrl: './lista-notas.component.html',
  styleUrl: './lista-notas.component.css'
})
export class ListaNotasComponent implements OnInit {

  constructor(private apiService: ApiService, private matDialog: MatDialog) {}

  notas: Nota[] = [];

  ngOnInit(): void {
    this.cargarNotas();
  }

  abrirModalCrearNota() {
      this.matDialog.open(ModalCrearNotaComponent);
    }

  cargarNotas(): void {
    this.apiService.getNotas().subscribe({
      next: (data) => {
        this.notas = data;
      },
      error: (error) => {
        
        console.error('Error al cargar las notas:', error);
      },
    });
  }
}
