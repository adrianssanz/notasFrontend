import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { NotasService } from '../../services/notas.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { ModalUpdateNotaComponent } from '../modal-update-nota/modal-update-nota.component';
import { CapitalizePipe } from '../../classes/CapitalizePipe';

@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css'],
})
export class NotaComponent {
  @Input() nota!: Nota;

  constructor(
    private notasService: NotasService,
    private matDialog: MatDialog
  ) {}

  abrirModalEliminar(id: number) {
    this.matDialog.open(ModalEliminarComponent, {
      data: { id: id },
    });
  }

  abrirModalUpdate(id: number) {
    this.matDialog.open(ModalUpdateNotaComponent, {
      data: { id: id },
    });
  }

  updateEstadoNota(id: number): void {
    this.notasService.updateEstadoNota(id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al finalizar la notas:', error);
      },
    });
  }
}
