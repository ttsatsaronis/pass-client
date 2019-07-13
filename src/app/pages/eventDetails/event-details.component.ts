import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../../generic.component';
import eventDetails from './event-details.js';

@Component({
  selector: 'eventDetails',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent extends GenericComponent implements OnInit {

  ngOnInit() {
    this.config = eventDetails.config;
    this.translations = eventDetails.config.translations;
  }

}
