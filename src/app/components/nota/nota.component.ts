import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css'],
})
export class NotaComponent {
  @Input() nota!: Nota;

  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog
  ) {}

  abrirModal(id: number) {
    this.matDialog.open(ModalEliminarComponent, {
      data: { id: id },
    });
  }

  updateEstadoNota(id: number): void {
    this.apiService.updateEstadoNota(id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al finalizar la notas:', error);
      },
    });
  }
}
