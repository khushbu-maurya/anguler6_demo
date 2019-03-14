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

  postStudent(stud:Student,fileToUpload:File){
  
    const formData: FormData = new FormData();
    formData.append('studentName',stud.studentName);
    formData.append('studentCourse',stud.studentCourse);
    formData.append('subject1',stud.subject1.toString());
    formData.append('subject2',stud.subject2.toString());
    formData.append('studImg', fileToUpload, fileToUpload.name);

    return this.http.post<Student>(this._api.postStudents, formData);
 
  }

  putStudent(id,stud:Student,fileToUpload:File){
  
    
    const formData: FormData = new FormData();
    formData.append('studentId',stud.studentId.toString());
    formData.append('studentName',stud.studentName);
    formData.append('studentCourse',stud.studentCourse);
    formData.append('subject1',stud.subject1.toString());
    formData.append('subject2',stud.subject2.toString());
    formData.append('studImg', fileToUpload, fileToUpload.name);

    return this.http.put<Student>(this._api.putStudents+"/"+id, formData);
 
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
