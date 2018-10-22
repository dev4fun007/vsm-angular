import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrgsService {

    constructor(
        private http: HttpClient
    ) { }

    getOrgs() {
        const url = 'https://vsm-sb.herokuapp.com/api/v1/orgs';
        return this.http.get(url);
    }
}
