import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; 
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modal-eliminar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css'],
})
export class ModalEliminarComponent {
  
  constructor(
    public matDialogRef: MatDialogRef<ModalEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private apiService: ApiService
  ) {}

  deleteNota(): void {
    const id = this.data.id;
    this.apiService.deleteNota(id).subscribe({
      next: (data) => {
        this.matDialogRef.close();
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al eliminar la notas:', error);
      },
    });
  }

  cerrarModal(): void {
    this.matDialogRef.close();
  }
}