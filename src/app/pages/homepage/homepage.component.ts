import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/event.request.js';
import { GenericComponent } from '../../generic.component';
import homepage from '../../configurations/pages/homepage.js';

// import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'homepage',
  providers: [EventService],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends GenericComponent implements OnInit {

  deviceInfo: any;
  todayResults: any;
  weekResults: any;
  monthResults: any;

  constructor(
    // private deviceService: DeviceDetectorService,
    private eventService: EventService
  ) {
    super();
    // this.epicFunction();
  }

  ngOnInit() {
    this.config = homepage.config;
    this.translations = homepage.config.translations;
    const req: EventRequest = new EventRequest();
    req.$dateRange = 'TODAY';
    this.eventService.fetchEvents(req)
      .subscribe(tRes => {
        this.todayResults = tRes.data;
        req.$dateRange = 'WEEK';
        this.eventService.fetchEvents(req)
          .subscribe(wRes => {
            this.weekResults = wRes.data;
            req.$dateRange = 'MONTH';
            this.eventService.fetchEvents(req)
              .subscribe(mRes => {
                this.monthResults = mRes.data;
              });
          });
      });
  }

  epicFunction() {
    // this.deviceInfo = this.deviceService.getDeviceInfo();
    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
    // console.log(this.deviceInfo);
    // console.log(isMobile);
    // console.log(isTablet);
    // console.log(isDesktopDevice);
  }

}
