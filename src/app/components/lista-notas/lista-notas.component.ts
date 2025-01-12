import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nota } from '../../interfaces/nota';
import { ApiService } from '../../services/api.service';
import { NotaComponent } from '../nota/nota.component';

@Component({
  selector: 'app-lista-notas',
  imports: [CommonModule, NotaComponent],
  templateUrl: './lista-notas.component.html',
  styleUrl: './lista-notas.component.css'
})
export class ListaNotasComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  notas: Nota[] = [];

  ngOnInit(): void {
    this.cargarNotas();
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
