import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../general.scss']
})
export class HeaderComponent implements OnInit{

  burgerMenu: boolean = false;

  headerItems = [
    {
      label: 'DISCOVER'
    },
    {
      label: 'PLACES'
    }
  ]

  ngOnInit() {

  }

  onBurgerMenu(){
    this.burgerMenu = !this.burgerMenu;
    console.log('dsadas');
  }

}
