import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import globalStyling from '../../globalStyling.js';

@Component({
  selector: 'landingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {

  logoIcon: string;
  deviceInfo: any;
  isIE: boolean;

  constructor(
    private deviceService: DeviceDetectorService
    ) {
      this.epicFunction();
    }

  epicFunction() {
      this.logoIcon = globalStyling.config.logoIcon;
      this.deviceInfo = this.deviceService.getDeviceInfo();
      this.isIE = this.deviceInfo.browser === 'ΙΕ';
    }

}
