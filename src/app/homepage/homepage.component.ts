import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service.js';
import { EventRequest } from 'src/transport/helper/event.request.js';
import homepage from './homepage.js';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'homepage',
  providers: [EventService],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  config: any;
  deviceInfo: any;
  results: any;

  constructor(
    private deviceService: DeviceDetectorService,
    private eventService: EventService,
    ) {
      this.epicFunction();
    }

  ngOnInit() {
    this.config = homepage.config;

    this.eventService.fetchEvents(new EventRequest())
    .subscribe(res => {
      this.results = res.data;
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
