import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nota',
  imports: [CommonModule],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
  @Input() nota!: Nota;

  constructor(private apiService: ApiService){

  }

 deleteNota(id: number): void {
  this.apiService.deleteNota(id).subscribe({
    next: (data) => {
    console.log(data);
    },
    error: (error) => {
    console.error('Error al cargar las notas:', error);
    },
  });
  }
}
