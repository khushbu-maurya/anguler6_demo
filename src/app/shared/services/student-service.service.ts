import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

import { map,catchError } from 'rxjs/operators';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  stude:Student;
  constructor(private http : HttpClient,private _api : ApiService) {
     }

  getAll():Observable<Array<Student>> {
    debugger
    const endpoint = this._api.getAllStudents;
 console.log(this.http.get<Array<Student>>(endpoint)
    .pipe(map(response => {return response;})));
    return this.http.get<Array<Student>>(endpoint)
    .pipe(map(response => {return response;}));
  }

  postStudent(stud:Student){
    this.stude=new Student();
    this.stude.studentName=stud.studentName;
    this.stude.studentCourse=stud.studentCourse;
    this.stude.subject1=stud.subject1;
    this.stude.subject2=stud.subject2;

    console.log(this.stude);
    return this.http.post<Student>(this._api.postStudents, this.stude);
 
  }

  putStudent(id,stud:Student){
    
    return this.http.put<Student>(this._api.putStudents+"/"+id, stud);
 
  }

  getStudent(id){
    console.log(this.http.get<Student>(this._api.getStudentById+"/"+id));
   return this.http.get<Student>(this._api.getStudentById+"/"+id);
  }

  deleteStudent(id){
    return this.http.delete<Student>(this._api.deleteStudents+"/"+id);
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
}

private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('error in serviceee', errMsg);
    return Observable.throw(errMsg);
}
}
