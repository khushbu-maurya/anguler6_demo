import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = 'http://localhost:8066/api';

  //studentTB
  public readonly getAllStudents=`${this.API}/studentTbs`;
  public readonly postStudents=`${this.API}/studentTbs`;
  public readonly putStudents=`${this.API}/studentTbs`;
  public readonly deleteStudents=`${this.API}/studentTbs`;
  public readonly getStudentById=`${this.API}/studentTbs`;

  //userTb
  public readonly loginUser=`${this.API}/userTbs/LoginUser`;

  constructor() { }

  public getJsonOptions() {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    return httpOptions;
}

public setOptions(body: any) {
    const options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        body: {'_id': body}
    };
    return options;
}

public getOptions(organization: any) {
    const options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        params: {'organization': organization}
    };
    return options;
}
}
