import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';
import { GenericComponent } from '../../generic.component';
import searchResultsPage from './search-results-page.js';

@Component({
  selector: 'searchResultsPage',
  providers: [EventService],
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: 0,
        visibility: 'visible',
      })),
      state('closed', style({
        left: '-260px',
        visibility: 'hidden',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SearchResultsPageComponent extends GenericComponent implements OnInit {

  deviceInfo: any;
  results: any;
  showFilters: boolean = false;

  constructor(
    private eventService: EventService
    ) {
      super();
    }

  ngOnInit() {
    this.config = searchResultsPage.config;
    this.translations = searchResultsPage.config.translations;

    this.eventService.fetchEvents(new EventRequest())
    .subscribe(res => {
      this.results = res.data;
    });
  }

  showNavbar(){
    this.showFilters = !this.showFilters;
    console.log(this.showFilters);
  }

  onClose(){
    this.showFilters = false;
  }

}
