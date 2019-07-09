import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { GenericRequest } from '../../../transport/generic.request';

@Component({
  selector: 'searchBar',
  providers: [CommonService],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  nightCenterTypes: any;
  musicKinds: any;
  artists: any;

  constructor(
    private commonService: CommonService,
  ) {
      this.onNightCenterTypes();
      this.onMusicKinds();
      this.onArtists();
    }

  ngOnInit() {


  }

  onSearch() {

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

  onArtists(){
    this.commonService.fetchLookup(new GenericRequest('artists'))
      .subscribe(res => {
        this.artists = res.data;
        this.artists.unshift({id: -1, active: null, name: "All Artists", imageUrl: null});
      });
  }

}
