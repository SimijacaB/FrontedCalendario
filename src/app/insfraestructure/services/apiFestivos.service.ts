import { environment } from "../../../enviroment/enviroment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";  
import { Observable, map } from "rxjs";

@Injectable({   
    providedIn: 'root'
})
export class ApiFestivosService {
    private url: string = environment.apiUrl + "festivos/"; 

    constructor(private http: HttpClient) { } 

    public validar(datetime: Date): Observable<boolean> { 
        const year = datetime.getFullYear();
        const month = datetime.getMonth() + 1; // ¡Mes en base 1!
        const day = datetime.getDate();

        const fullUrl = `${this.url}verificar/${year}/${month}/${day}`;

        return this.http.get<string>(fullUrl).pipe(
            map(response => {
                return response.trim().toLowerCase() === "fecha valida";
            })
        );
    }
}
