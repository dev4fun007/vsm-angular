import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  apiPrefix = 'api/v1/';
  step = 'step1/';
  mainUrl = environment.baseUrl + this.apiPrefix + this.step;

  constructor(
      private http: HttpClient
    ) { }


    getOrgsDepartment(orgName, scope)
    {
      const url = this.mainUrl+'department?org='+orgName+"&scope="+scope;
      return this.http.get(url);
    }

    postOrgsDepartment()
    {

    }

}