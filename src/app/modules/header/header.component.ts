import { Component, OnInit } from '@angular/core';
import globalStyling from '../../globalStyling.js';
import { GenericComponent } from '../../generic.component';
import header from './header.js';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends GenericComponent implements OnInit {

  burgerMenu: boolean = false;

  ngOnInit() {
    this.config = header.config;
    this.globalStyling = globalStyling.config;
  }

  onBurgerMenu() {
    this.burgerMenu = !this.burgerMenu;
  }

}
