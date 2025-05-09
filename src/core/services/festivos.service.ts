import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private apiUrl = `${environment.apiUrl}/festivos`;

  constructor(private http: HttpClient) { }

  getFestivos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearFestivo(festivo: any): Observable<any> {
    return this.http.post(this.apiUrl, festivo);
  }

  eliminarFestivo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Añadir método para validar fecha si es necesario
  validarFecha(fecha: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/validar?fecha=${fecha}`);
  }
}