import { Component, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';

@Component({
  selector: 'carousel',
  providers: [CommonService],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  @Input() translations: any;
  @Input() image: string;
  @Input() maxHeight: string;
  @Input() searchBar: boolean;
}
