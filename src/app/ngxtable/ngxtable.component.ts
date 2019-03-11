import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../shared/services/student-service.service';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Student} from '../shared/models/student';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-ngxtable',
  templateUrl:'./ngxtable.component.html',
  styleUrls: ['./ngxtable.component.css']
})
export class NgxtableComponent implements OnInit {


  students:Student[];
  constructor(private studentservice : StudentServiceService) { debugger
   this.studentservice.getAll().subscribe(data => { 
     
       this.students = data; 
     });
   }

  ngOnInit() {
  
  }

}
