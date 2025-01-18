import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta, Usuario } from '../interfaces/nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`, {
      withCredentials: true,
    });
  }
}
