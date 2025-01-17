import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotasService } from '../../services/notas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-crear-nota',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-crear-nota.component.html',
  styleUrl: './modal-crear-nota.component.css'
})
export class ModalCrearNotaComponent {
  titulo: string = '';
  descripcion: string= '';
  errorMessage: string ='';

  constructor(
    public matDialogRef: MatDialogRef<ModalCrearNotaComponent>,
    private router: Router,
    private notasService: NotasService,
    private snackBar: MatSnackBar
  ){}

  cerrarModal(): void {
    this.matDialogRef.close(); // Cierra el modal
  }

  crearNota(): void{
    this.notasService.createNota(this.titulo, this.descripcion).subscribe({
      next: (response)=>{
        this.matDialogRef.close();
        this.snackBar
          .open('Creando nota', '', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe(() => {
            window.location.reload();
            console.log("Nota creada.");
          });
      },
      error:  (err) =>{
        console.error(err);
        this.errorMessage = err.error;
      }
    })
  }
}
