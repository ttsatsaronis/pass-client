import { Component, OnInit } from '@angular/core';
import globalStyling from '../globalStyling.js';
import footer from './footer.js';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  config: any;
  globalStyling: any;

  ngOnInit() {
    this.config = footer.config;
    this.globalStyling = globalStyling.config;
  }

}
