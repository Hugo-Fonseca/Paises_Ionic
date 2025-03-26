import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from 'src/core/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage  implements OnInit{

  private service = inject(CountriesService)

  ngOnInit(): void {
    this.getCountries()
  }

  constructor() {}

  getCountries(){
    this.service.getCountries().subscribe({
      next: (resp: any[]) => {
        console.log(resp)
      }
    })
  }
}
