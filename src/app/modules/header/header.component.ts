import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import globalStyling from '../../globalStyling.js';
import { GenericComponent } from '../../generic.component';
import header from '../../configurations/modules/header.js';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '61px',
        visibility: 'visible',
        opacity: 1
      })),
      state('closed', style({
        top: '-46px',
        visibility: 'hidden',
        opacity: 0
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ],
})
export class HeaderComponent extends GenericComponent implements OnInit {

  burgerMenu: boolean = false;
  active = false;

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
    this.active = !this.active;
    this.burgerMenu = !this.burgerMenu;
  }

  onNavigate(path: string) {
    this.router.navigate(["/", path]);
  }

  onBlur() {
    if (this.burgerMenu) {
      this.burgerMenu = false;
      this.active = false;
    }
  }

}
