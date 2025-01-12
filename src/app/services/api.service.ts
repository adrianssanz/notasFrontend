import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080/api';
  

  constructor(private http: HttpClient) { }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.apiUrl}/notas`, { withCredentials: true });
  }

  deleteNota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notas/${id}`, { withCredentials: true });
  }

  getNotaById(id: number){
    return this.http.get(`${this.apiUrl}/notas/${id}`, {withCredentials: true})
  }
}
