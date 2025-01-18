import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/nota';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsarios();
  }

  usuarios: Usuario[] = [];

  cargarUsarios(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al cargar las notas:', error);
      },
    });
  }
}
