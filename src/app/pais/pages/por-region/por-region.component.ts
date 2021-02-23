import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [
    ]
})
export class PorRegionComponent
{
    regiones    : string[]  = ['africa', 'europe', 'americas', 'asia', 'oceania'];
    regionActiva: string    = '';
    paises      : Country[] = [];

    constructor( private paisService: PaisService) { }

    activarRegion(region:string)
    {
        if(region === this.regionActiva) return;
        
        this.regionActiva = region;
        this.paises = [];

        this.paisService.buscarPor(region, 'region').subscribe(paises => this.paises = paises);
    }

}
