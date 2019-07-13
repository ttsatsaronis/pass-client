import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cookiePolicy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {

  cookiePolicy: any;

  ngOnInit(){
    this.cookiePolicy = null;
  }

  onAcceptCookie(){
    this.cookiePolicy = localStorage.setItem("cookiePolicy", 'accepted');
  }
}
