import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericComponent } from '../../generic.component';
import eventDetails from '../../configurations/pages/event-details.js';
import { EventService } from 'src/services/event.service';
import { EventRequest } from 'src/transport/event.request';

@Component({
  selector: 'eventDetails',
  providers: [EventService],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent extends GenericComponent implements OnInit {

  paramId: number;
  eventDetails: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { super(); }

  ngOnInit() {
    this.config = eventDetails.config;
    this.translations = eventDetails.config.translations;

    this.route.paramMap.subscribe(params => {
      this.paramId = +params.get('id') || -1;
      console.log(this.paramId);
      if (this.paramId) {
        const req: EventRequest = new EventRequest();
        req.$id = this.paramId;
        req.$showDetails = true;
        this.eventService.fetchEvents(req)
          .subscribe(res => {
            this.eventDetails = res.data;
          });
      }
    });

  }

}
