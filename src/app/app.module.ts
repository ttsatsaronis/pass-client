import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppRoutingModule } from './app-routing.module';
//pages
import { PassComponent } from 'src/app/pass.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchResultsPageComponent } from './pages/searchResultsPage/search-results-page.component';
//modules
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { SearchBarComponent } from './modules/search-bar/search-bar.component';
import { StoreComponent } from './modules/footer/store.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';
import { SlideComponent } from './modules/slide/slide.component';
import { GridTileComponent } from './modules/grid-tile/grid-tile.component';
import { FiltersComponent } from './modules/filters/filters.component';

@NgModule({
  declarations: [
    PassComponent,
    HomepageComponent,
    SearchResultsPageComponent,

    HeaderComponent,
    FooterComponent,
    StoreComponent,
    CarouselComponent,
    SearchBarComponent,
    DropdownComponent,
    SlideComponent,
    GridTileComponent,
    FiltersComponent,
  ],
  imports: [
    DeviceDetectorModule.forRoot(),

    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ PassComponent ]
})
export class AppModule { }
