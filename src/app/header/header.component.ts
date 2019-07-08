import { Component, OnInit } from '@angular/core';
import globalStyling from '../globalStyling.js';
import header from './header.js';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../globalStyling.scss']
})
export class HeaderComponent implements OnInit {

  burgerMenu: boolean = false;
  config: any;
  globalStyling: any;

  ngOnInit() {
    this.config = header.config;
    this.globalStyling = globalStyling.config;
  }

  onBurgerMenu() {
    this.burgerMenu = !this.burgerMenu;
  }

}
