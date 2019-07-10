import { Component, OnInit, Input } from '@angular/core';
import { GenericComponent } from '../../generic.component';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';
import filters from './filters'

@Component({
  selector: 'filters',
  providers: [CommonService],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent extends GenericComponent implements OnInit {

  @Input() item: any;

  nightCenterTypes: any;
  musicKinds: any;

  constructor(
    private commonService: CommonService,
  ) {
      super();
      this.onNightCenterTypes();
      this.onMusicKinds();
    }

  ngOnInit() {
    this.config = filters.config
  }

  onNightCenterTypes(){
    this.commonService.fetchLookup(new GenericRequest('night_center_types'))
      .subscribe(res => {
        this.nightCenterTypes = res.data;
        this.nightCenterTypes.unshift({id: -1, active: null, name: "All Places", imageUrl: null});
      });
  }

  onMusicKinds(){
    this.commonService.fetchLookup(new GenericRequest('music_kinds'))
      .subscribe(res => {
        this.musicKinds = res.data;
        this.musicKinds.unshift({id: -1, active: null, name: "All Music", imageUrl: null});
      });
  }

}
