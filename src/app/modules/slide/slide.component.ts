import { Component, OnInit, Input } from '@angular/core';
import slide from './slide.js';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';

@Component({
  selector: 'slide',
  providers: [EventService],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() headerText: string;
  @Input() scrollOnMobile: boolean = false;
  config: any;

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.config = slide.config;
    this.eventService.fetchEvents(new EventRequest())
    .subscribe(res => {
      console.log('Events => ', res);
    });
  }

}
