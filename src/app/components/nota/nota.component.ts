import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { NotasService } from '../../services/notas.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarComponent } from '../modal-confirmar/modal-confirmar.component';
import { ModalUpdateNotaComponent } from '../modal-update-nota/modal-update-nota.component';
import { CapitalizePipe } from '../../classes/CapitalizePipe';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  abrirModalConfirmar(id: number) {
      const dialogRef = this.matDialog.open(ModalConfirmarComponent, {
        data:{
          message: "¿Eliminar nota?"
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteNota(id);
        } else {
          console.log('Acción cancelada');
        }
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

  deleteNota(id: number): void {
    this.snackBar.open("Borrando nota", '', {
      duration: 3000
    }).afterDismissed().subscribe(() => {
      this.notasService.deleteNota(id).subscribe({
        next: (data) => {
          window.location.reload();
          console.log("Nota eliminada.");
        },
        error: (error) => {
          console.error('Error al eliminar la notas:', error);
        },
      });
      
    });
    
  }
}
