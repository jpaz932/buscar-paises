import { Component, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country }     from '../../interfaces/pais.interface';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [
        `
            li {
                cursor: pointer
            }
        `
    ]
})

export class PorPaisComponent 
{   
    termino : string    = '';
    hayError: boolean   = false;
    paises  : Country[] = [];
    
    paisesSugeridos  : Country[] = [];
    mostrarSugerencia: boolean = false;

    constructor(private paisService: PaisService) {}

    buscar(termino: string)
    {
        this.termino  = termino;
        this.hayError = false;
        this.mostrarSugerencia = false;

        this.paisService.buscarPor(termino, 'name').subscribe( (paises) => 
        {
            this.paises = paises;
        }, (err) => {
            this.hayError = true;
            this.paises   = [];
        });
    }

    sugerencias(termino: string)
    {
        this.hayError = false;
        this.termino  = termino;
        this.mostrarSugerencia = true;

        this.paisService.buscarPor(termino, 'name').subscribe(
            paises => this.paisesSugeridos = paises.splice(0, 5),
            (err) => this.paisesSugeridos = []
        );
    }
}
