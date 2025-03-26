import { Directive, Pipe, PipeTransform } from '@angular/core';

@Directive({
  selector: '[appSearchCountries]',
  standalone: true
})
export class SearchCountriesDirective {}

@Pipe({
  name: 'filtrarPaises',
  pure: false
})

export class FilterCountriesPipe implements PipeTransform {
  transform(paises: any[], searchTerm: string): any[] {
    // Si no hay término de búsqueda, devolver todos los países
    if (!paises || !searchTerm) {
      return paises;
    }

    // Convertir el término de búsqueda a minúsculas para hacer la búsqueda insensible a mayúsculas
    searchTerm = searchTerm.toLowerCase();

    // Filtrar países por nombre común o región
    return paises.filter(pais =>
      pais.name.common.toLowerCase().includes(searchTerm) ||
      pais.region.toLowerCase().includes(searchTerm)
    );
  }
}
