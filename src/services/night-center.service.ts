import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IList } from 'src/transport/helper/list.response';
import { map } from 'rxjs/operators';
import { serverURL, authURL } from 'src/transport/helper/url.helper';
import { NightCenterRequest } from 'src/transport/night-center.request';


@Injectable()
export class NightCenterService {

  constructor(private http: HttpClient) { }

  fetchNightCenters(request: NightCenterRequest) {
    return this.http.post(serverURL + authURL + '/night-center/fetch-night-centers',
      request, { observe: 'response' })
      .pipe(map(response => response.body))
      .pipe(map((res: IList) => res as IList));
  }
}
