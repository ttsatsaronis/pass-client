import { Component } from '@angular/core';
import homepage from './homepage.js'

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  config: any;

  ngOnInit() {
    this.config = homepage.config;
  }

}
