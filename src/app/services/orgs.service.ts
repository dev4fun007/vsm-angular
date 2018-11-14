import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrgsService {
    apiPrefix = 'api/v1/';
    step = 'step1/';
    mainUrl = environment.baseUrl + this.apiPrefix + this.step;
    constructor(
        private http: HttpClient
    ) { }

    getOrgs() {
        const url = this.mainUrl + 'orgs';
        return this.http.get(url);
    }

    addOrg(payload) {
        const url = this.mainUrl + 'org';
        return this.http.post(url, payload);
    }
}
