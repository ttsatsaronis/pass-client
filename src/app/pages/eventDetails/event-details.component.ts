import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericComponent } from '../../generic.component';
import eventDetails from '../../configurations/pages/event-details.js';

@Component({
  selector: 'eventDetails',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent extends GenericComponent implements OnInit {

  paramId: number;

  constructor(
    private route: ActivatedRoute
  ) { super(); }

  ngOnInit() {
    this.config = eventDetails.config;
    this.translations = eventDetails.config.translations;

    this.route.paramMap.subscribe(params => {
      this.paramId = +params.get('id') || -1;
      console.log(this.paramId);
    });

  }

}
