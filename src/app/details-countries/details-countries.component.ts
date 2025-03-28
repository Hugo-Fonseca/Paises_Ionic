import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/core/services/countries.service';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonThumbnail} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details-countries',
  templateUrl: './details-countries.component.html',
  styleUrls: ['./details-countries.component.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, CommonModule, IonThumbnail, IonCardContent]
})
export class DetailsCountriesComponent  implements OnInit {
  pais: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    // Obtener el nombre del país de la URL
    const nombrePais = this.route.snapshot.paramMap.get('nombrePais');

    // Cargar todos los países y encontrar el específico
    this.countriesService.getCountries().subscribe({
      next: (paises) => {
        this.pais = paises.find(
          p => p.name.common === nombrePais
        );
      },
      error: (error) => {
        console.error('Error al cargar detalles del país', error);
      }
    });
  }

  // Método para convertir objeto de idiomas a string
  obtenerIdiomas(languages: any): string {
    if (!languages) return 'No disponible';
    return Object.values(languages).join(', ');
  }

}
