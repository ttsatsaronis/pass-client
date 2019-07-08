import { Component, OnInit, Input } from '@angular/core';
import slide from './slide.js'

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit{

  @Input() headerText: string;
  @Input() scrollOnMobile: boolean = false;
  config: any;

  ngOnInit() {
    this.config = slide.config;

  }

}
