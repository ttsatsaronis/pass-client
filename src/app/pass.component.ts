import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import globalStyling from './globalStyling.js';

@Component({
  selector: 'pass',
  template: `<div *ngIf="isIE else elsePart" class="internetExplorer">
                <img [src]="logoIcon" class="ieLogo">
                <span class="ieText">Οι υπηρεσίες μας δεν διατίθενται σε Internet Explorer παρακαλώ δοκιμάστε απο διαφορετικό browser</span>
              </div>
              <ng-template #elsePart>
                <router-outlet></router-outlet>
              </ng-template>`
})

export class PassComponent {

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
      this.isIE = this.deviceInfo.browser === 'IE';
    }

}
