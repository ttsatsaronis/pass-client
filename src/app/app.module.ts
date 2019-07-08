import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
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
    DropdownComponent,
    SlideComponent,
    GridTileComponent,
  ],
  imports: [
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
