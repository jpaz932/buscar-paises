import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})

export class PaisService 
{
    private apiUrl: string = 'https://restcountries.eu/rest/v2';

    constructor(private http: HttpClient) { }

    buscarPor(termino: string, tipo: string): Observable<Country[]>
    {
        const params = new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');

        const url = `${this.apiUrl}/${tipo}/${termino}`;

        return this.http.get<Country[]>(url, {params});
    }

    paisAlpha(termino: string): Observable<Country> {
        const url = `${this.apiUrl}/alpha/${termino}`;

        return this.http.get<Country>(url);
    }

}
