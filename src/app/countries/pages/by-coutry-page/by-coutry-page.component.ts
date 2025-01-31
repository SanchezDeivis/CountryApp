import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-coutry-page',
  templateUrl: './by-coutry-page.component.html',
  styles: ``
})
export class ByCoutryPageComponent implements OnInit{

  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(public countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }


}
