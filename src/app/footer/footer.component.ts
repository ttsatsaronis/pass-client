import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../general.scss']
})
export class FooterComponent implements OnInit{

  headerItems = [
    {
      label: 'HOME'
    },
    {
      label: 'LOGIN / SIGN UP'
    },
    {
      label: 'CONTACT US'
    }
  ]

  ngOnInit() {

  }

}
