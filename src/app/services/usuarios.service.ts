import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaUsuarios, Usuario } from '../interfaces/nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getUsuarios(page: number): Observable<RespuestaUsuarios> {
    return this.http.get<RespuestaUsuarios>(`${this.apiUrl}/usuarios?page=${page}`, {
      withCredentials: true,
    });
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuarios/${id}`, { withCredentials: true });
  }
}
