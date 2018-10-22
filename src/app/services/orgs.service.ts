import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrgsService {
    baseUrl = 'https://vsm-sb.herokuapp.com/';
    constructor(
        private http: HttpClient
    ) { }

    getOrgs() {
        const url = this.baseUrl + 'api/v1/orgs';
        return this.http.get(url);
    }

    addOrg(payload) {
        const url = this.baseUrl + 'api/v1/org';
        return this.http.post(url, payload);
    }
}
