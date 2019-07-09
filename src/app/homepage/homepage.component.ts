import { Component } from '@angular/core';
import homepage from './homepage.js'

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  config: any;
  deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService) {
      this.epicFunction();
    }

  ngOnInit() {
    this.config = homepage.config;
  }

  epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      console.log(this.deviceInfo);
      console.log(isMobile);
      console.log(isTablet);
      console.log(isDesktopDevice);
    }

}
