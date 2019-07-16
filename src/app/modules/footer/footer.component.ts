import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import globalStyling from '../../globalStyling.js';
import { GenericComponent } from '../../generic.component';
import footer from '../../configurations/modules/footer.js';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent extends GenericComponent implements OnInit {

  globalStyling: any;

  constructor(
    private router: Router,
    ) {
      super();
    }

  ngOnInit() {
    this.config = footer.config;
    this.globalStyling = globalStyling.config;
  }

  onNavigate(path: string) {
    this.router.navigate(["/", path]);
  }

}
