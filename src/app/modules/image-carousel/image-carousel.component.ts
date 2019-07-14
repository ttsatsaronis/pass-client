import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'imageCarousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() translations: any;
  @Input() images: any;

  selectedImage: string;

  ngOnInit() {
    this.selectedImage = this.images[0];
  }

  onSelect(image: string){
    this.selectedImage = image;
  }

}
