import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  @Input() translations: any;
  @Input() headerText: string;
  @Input() scrollOnMobile: boolean = false;
  @Input() results: any;

  constructor(
    private router: Router
  ) {}


  onNavigate(path: string) {
    this.router.navigate(["/", path]);
  }

}
