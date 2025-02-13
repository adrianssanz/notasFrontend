import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota, RespuestaNotas } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  apiUrl = 'http://localhost:8080/api';
  

  constructor(private http: HttpClient) { }

  getNotas(page: number): Observable<RespuestaNotas> {
    return this.http.get<RespuestaNotas>(`${this.apiUrl}/notas?page=${page}`, { withCredentials: true });
  }

  createNota(titulo: string, descripcion: string): Observable<Nota> {
    console.log("Service" + titulo, descripcion)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { titulo, descripcion };
    return this.http.post<Nota>(`${this.apiUrl}/notas`, body, { headers, withCredentials: true });
  }

  updateNota(id: number, titulo: string, descripcion: string): Observable<Nota>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { titulo, descripcion };
    return this.http.put<Nota>(`${this.apiUrl}/notas/${id}`, body, { headers, withCredentials: true });
  }

  deleteNota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notas/${id}`, { withCredentials: true });
  }

  updateEstadoNota(id: number): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/notas/${id}/estado`, 
      {},
      { withCredentials: true }
    );
  }

  getNotaById(id: number): Observable<Nota>{
    return this.http.get<Nota>(`${this.apiUrl}/notas/${id}`, {withCredentials: true})
  }
}
