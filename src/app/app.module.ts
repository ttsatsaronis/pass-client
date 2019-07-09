import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { SearchBarComponent } from './modules/search-bar/search-bar.component';
import { StoreComponent } from './footer/store.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';
import { SlideComponent } from './modules/slide/slide.component';
import { GridTileComponent } from './modules/grid-tile/grid-tile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,

    StoreComponent,
    CarouselComponent,
    SearchBarComponent,
    DropdownComponent,
    SlideComponent,
    GridTileComponent,
  ],
  imports: [
    DeviceDetectorModule.forRoot(),

    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    HomepageComponent,
    HeaderComponent
  ]
})
export class AppModule { }
