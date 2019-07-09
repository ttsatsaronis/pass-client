import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(
    private router: Router,
    ) {
      super();
    }

  ngOnInit() {
    this.config = header.config;
    this.globalStyling = globalStyling.config;
  }

  onBurgerMenu() {
    this.burgerMenu = !this.burgerMenu;
  }

  onNavigate(path: string) {
    this.router.navigate(["/", path]);
  }

}
