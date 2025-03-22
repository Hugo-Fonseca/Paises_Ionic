import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countriesUrl: string = 'https://restcountries.com/v3.1/all'
  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesUrl);
  }
}
