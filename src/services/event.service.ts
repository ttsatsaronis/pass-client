import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL, authURL } from 'src/transport/helper/url.helper';
import { IList } from 'src/transport/helper/list.response';
import { map } from 'rxjs/operators';
import { EventRequest } from 'src/transport/helper/event.request';


@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  fetchEvents(request: EventRequest) {
    return this.http.post(serverURL + authURL + '/event/fetch-events',
      request, { observe: 'response' })
      .pipe(map(response => response.body))
      .pipe(map((res: IList) => res as IList));
  }
}
