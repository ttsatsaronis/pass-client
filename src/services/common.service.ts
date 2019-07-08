import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL, authURL } from 'src/transport/helper/url.helper';
import { GenericRequest } from 'src/transport/generic.request';
import { IList } from 'src/transport/helper/list.response';
import { map } from 'rxjs/operators';



@Injectable()
export class SystemLibraryService {

    constructor(private http: HttpClient) { }

    fetchIcons(request: GenericRequest) {
        return this.http.post(serverURL + authURL + '/common/fetch-lookup',
            request, { observe: 'response' })
            .pipe(map(response => response.body))
            .pipe(map((res: IList) => res as IList));
    }
}
