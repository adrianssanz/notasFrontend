import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}
  

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { usuario: username, password };
    return this.http.post(`${this.baseUrl}/login`, body, { headers, withCredentials: true });
  }

  register(usuario: string, email: string, password: string): Observable<Usuario> {
    const body = { usuario, email, password };
    return this.http.post<Usuario>(`${this.baseUrl}/register`, body, { withCredentials: true });
    }

  isLoggedIn(): Observable<boolean> {
    return this.http.get(`${this.baseUrl}/sesion`, {withCredentials: true}).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  getUser(): Observable<Usuario | null> {
    return this.http.get<Usuario>(`${this.baseUrl}/sesion`, {withCredentials: true}).pipe(
      map((user) => user),
      catchError(() => of(null))
    );
  }
  

  logout(): Observable<any>{
    return this.http.post(`${this.baseUrl}/logout`,{}, {withCredentials: true}).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
