import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchResultsPageComponent } from './pages/searchResultsPage/search-results-page.component';
import { EventDetailsComponent } from './pages/eventDetails/event-details.component';
// modules
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { SearchBarComponent } from './modules/search-bar/search-bar.component';
import { StoreComponent } from './modules/footer/store.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';
import { SlideComponent } from './modules/slide/slide.component';
import { GridTileComponent } from './modules/grid-tile/grid-tile.component';
import { FiltersComponent } from './modules/filters/filters.component';
import { DropdownFilterComponent } from './modules/filters/dropdown-filter.component';
import { CheckboxFilterComponent } from './modules/filters/checkbox-filter.component';
import { ResultsComponent } from './modules/results/results.component';
import { ImageCarouselComponent } from './modules/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchResultsPageComponent,
    EventDetailsComponent,

    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
    CarouselComponent,
    SearchBarComponent,
    DropdownComponent,
    SlideComponent,
    GridTileComponent,
    ResultsComponent,
    ImageCarouselComponent,

    //filters
    FiltersComponent,
    DropdownFilterComponent,
    CheckboxFilterComponent
  ],
  imports: [
    DeviceDetectorModule.forRoot(),

    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ LandingPageComponent ]
})
export class AppModule { }
