import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';
import { GenericComponent } from '../../generic.component';
import searchResultsPage from './search-results-page.js';

@Component({
  selector: 'searchResultsPage',
  providers: [EventService],
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent extends GenericComponent implements OnInit {

  deviceInfo: any;
  results: any;

  constructor(
    private eventService: EventService
    ) {
      super();
    }

  ngOnInit() {
    this.config = searchResultsPage.config;

    this.eventService.fetchEvents(new EventRequest())
    .subscribe(res => {
      this.results = res.data;
    });
  }

}
