import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';

@Component({
  selector: 'searchBar',
  providers: [CommonService],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit{
  @Input() headerText: string;
  @Input() subHeaderText: string;

  constructor(
    private commonService: CommonService,
    ) {}

  request = new GenericRequest();

  ngOnInit() {

    this.request.tableName = 'music_kinds';

    this.commonService.fetchLookup(this.request)
      .subscribe(res => {
        console.log('dsadsadsa', res);
      });

  }

  onSearch(){
  }
}
