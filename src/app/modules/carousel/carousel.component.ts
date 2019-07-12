import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  @Input() translations: any;
  @Input() image: string;
  @Input() maxHeight: string;
  @Input() searchBar: boolean;
}
