import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseUrl = "https://vsm-sb.herokuapp.com";


  constructor(
      private http: HttpClient
    ) { }


    getOrgsDepartment(orgName, scope)
    {
      const url = this.baseUrl+'/api/v1/department?org='+orgName+"&scope="+scope;
      return this.http.get(url);
    }

    postOrgsDepartment()
    {

    }

}