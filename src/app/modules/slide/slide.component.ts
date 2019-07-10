import { Component, Input } from '@angular/core';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  @Input() translations: any;
  @Input() headerText: string;
  @Input() scrollOnMobile: boolean = false;
  @Input() results: any;

}
