import { Component, OnInit } from '@angular/core';
import header from './header.js';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../general.scss']
})
export class HeaderComponent implements OnInit{

  burgerMenu: boolean = false;
  config: Object;

  ngOnInit() {
    this.config = header.config;
  }

  onBurgerMenu(){
    this.burgerMenu = !this.burgerMenu;
  }

}
