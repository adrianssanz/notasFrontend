import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nota } from '../../interfaces/nota';

@Component({
  selector: 'app-modal-update-nota',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-update-nota.component.html',
  styleUrl: './modal-update-nota.component.css',
})
export class ModalUpdateNotaComponent implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  errorMessage: string = '';
  nota!: Nota;

  ngOnInit(): void {
    this.cargarNota();
  }

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

  cargarNota(): void{
    this.apiService.getNotaById(this.data.id).subscribe({
      next: (data) => {
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        console.log(data);
      },
      error: (error) => {
        console.error('Error al cargar las notas:', error);
      },
    });
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
