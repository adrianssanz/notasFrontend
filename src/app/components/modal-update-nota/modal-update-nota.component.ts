import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-update-nota',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-update-nota.component.html',
  styleUrl: './modal-update-nota.component.css',
})
export class ModalUpdateNotaComponent {
  titulo: string = '';
  descripcion: string = '';
  errorMessage: string = '';

  constructor(
    public matDialogRef: MatDialogRef<ModalUpdateNotaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private router: Router,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ){}

  cerrarModal(): void {
    this.matDialogRef.close(); // Cierra el modal
  }

  editarNota(): void{
    const id = this.data.id;
    this.apiService.updateNota(id , this.titulo, this.descripcion).subscribe({
      next: (response)=>{
        this.matDialogRef.close();
        this.snackBar
          .open('Editando nota', '', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe(() => {
            window.location.reload();
          });
      },
      error:  (err) =>{
        console.error(err);
        this.errorMessage = err.error;
      }
    })
  }
}
