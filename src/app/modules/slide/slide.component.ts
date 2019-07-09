import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() labels: any;
  @Input() headerText: string;
  @Input() scrollOnMobile: boolean = false;
  @Input() results: any;

  ngOnInit() {
  }

}
