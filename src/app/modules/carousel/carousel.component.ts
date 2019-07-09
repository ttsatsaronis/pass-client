import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';

@Component({
  selector: 'carousel',
  providers: [CommonService],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit{
  @Input() image: string;
  @Input() maxHeight: string;
  @Input() headerText: string;
  @Input() subHeaderText: string;
  @Input() searchBar: boolean;

  ngOnInit() {

  }

}
