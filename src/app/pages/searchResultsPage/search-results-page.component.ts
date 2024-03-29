import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/event.request.js';
import { GenericComponent } from '../../generic.component';
import searchResultsPage from '../../configurations/pages/search-results-page.js';
import { NightCenterService } from 'src/services/night-center.service';
import { NightCenterRequest } from 'src/transport/night-center.request';

@Component({
  selector: 'searchResultsPage',
  providers: [EventService, NightCenterService],
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
  screenView: any;

  constructor(
    private eventService: EventService,
    private nightCenterService: NightCenterService,
    private activatedRoute: ActivatedRoute,
    ) {
      super();
    }

  ngOnInit() {
    this.config = searchResultsPage.config;
    this.translations = searchResultsPage.config.translations;
    this.screenView = this.activatedRoute.snapshot.data.load;

    this.screenView === 'discover' ? this.loadDiscoverFilters() : this.loadPlacesFilters();
  }

  loadDiscoverFilters() {
    this.eventService.fetchEvents(new EventRequest())
    .subscribe(res => {
      this.results = res.data;
    });
  }

  loadPlacesFilters() {
    this.nightCenterService.fetchNightCenters(new NightCenterRequest())
    .subscribe(res => {
      this.results = res.data;
    });
  }

  showNavbar() {
    this.showFilters = !this.showFilters;
    console.log(this.showFilters);
  }

  onClose() {
    this.showFilters = false;
  }

}
