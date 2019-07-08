import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { GenericRequest } from '../../transport/generic.request';

@Component({
  selector: 'carousel',
  providers: [CommonService],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

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
