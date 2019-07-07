import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './footer/store.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,

    StoreComponent,
    CarouselComponent,
    DropdownComponent
  ],
  imports: [
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
