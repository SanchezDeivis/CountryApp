import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCoutryPageComponent } from './pages/by-coutry-page/by-coutry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCoutryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
})
export class CountriesModule { }
