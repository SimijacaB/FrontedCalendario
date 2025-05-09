import { environment } from "../../../enviroment/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ApiFestivosService {
    private url: string;

    constructor(private http: HttpClient) {
        // Normaliza la URL base
        this.url = `${environment.apiUrl.replace(/\/$/, '')}/festivos/`;
    }

    public validar(datetime: Date): Observable<boolean> {
        const year = datetime.getFullYear();
        const month = datetime.getMonth() + 1; // Mes en base 1
        const day = datetime.getDate();

        const fullUrl = `${this.url}verificar/${year}/${month}/${day}`;

        // Versión para API que devuelve JSON {esValido: boolean}
        return this.http.get<{esValido: boolean}>(fullUrl).pipe(
            map(response => response.esValido)
        );

        // O si tu API devuelve texto plano:
        // return this.http.get(fullUrl, {responseType: 'text'}).pipe(
        //     map(response => response.trim().toLowerCase() === "fecha valida")
        // );
    }
}