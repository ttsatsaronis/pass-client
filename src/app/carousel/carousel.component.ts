import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss', '../../general.scss']
})
export class CarouselComponent implements OnInit{

  ngOnInit() {

  }

  onSearch(){
    console.log('dasdsa');
  }
}
