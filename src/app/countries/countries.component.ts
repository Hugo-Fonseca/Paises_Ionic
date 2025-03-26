import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonRow, IonHeader, IonCard, IonCardHeader, IonToolbar, IonGrid, IonTitle, IonCol, IonCardTitle, IonCardSubtitle, IonSearchbar, IonButton } from "@ionic/angular/standalone";
import { FilterCountriesPipe, SearchCountriesDirective } from 'src/core/directives/search-countries.directive';
import { CountriesService } from 'src/core/services/countries.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [IonCardSubtitle, IonGrid, IonCard, IonContent, IonRow, IonHeader, IonCardHeader, IonToolbar, IonTitle, IonCol, IonCardTitle, CommonModule, IonSearchbar, FilterCountriesPipe, SearchCountriesDirective, IonButton]
})
export class CountriesComponent implements OnInit {
  paises: any[] = [];
  paisesFiltrados: any[] = [];
  terminoBusqueda: string = '';
  logs: string[] = []; // Almacena los países visitados en memoria

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        // Ordenar países alfabéticamente
        this.paises = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        this.paisesFiltrados = [...this.paises];
      },
      error: (error) => {
        console.error('Error al cargar países', error);
      }
    });
  }

  irADetallePais(pais: any) {
    // Guardar en el log la selección del país
    this.logs.push(`Visitaste: ${pais.name.common}`);
    console.log(this.logs); // Mostrar en la consola

    // Navegar usando el nombre del país como parámetro
    this.router.navigate(['/paises/detalle', pais.name.common]);
  }

  // Método para borrar los logs
  limpiarLogs() {
    this.logs = [];
    console.log("Logs borrados");
  }

  // Método para manejar la búsqueda
  onBuscar(evento: any) {
    this.terminoBusqueda = evento.detail.value;
  }
}
