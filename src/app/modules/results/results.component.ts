import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'results',
  providers: [CommonService],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  @Input() translations: any;
  @Input() config: any;
  @Input() results: any;

  ngOnInit() {

  }
}
