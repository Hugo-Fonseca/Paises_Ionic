import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsCountriesComponent } from './details-countries/details-countries.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path: 'paises',
    loadComponent: () => import('./countries/countries.component').then(m => m.CountriesComponent)
  },
  {
    path: 'paises/detalle/:nombrePais',
    loadComponent: () => import('./details-countries/details-countries.component').then(m => m.DetailsCountriesComponent)
  },
  {
    path: '',
    redirectTo: 'paises',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
