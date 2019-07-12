import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';

@Component({
  selector: 'results',
  providers: [CommonService],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  @Input() translations: any;
  @Input() config: any;

  ngOnInit(){

  }
}
