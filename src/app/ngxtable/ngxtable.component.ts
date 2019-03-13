import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../shared/services/student-service.service';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Student} from '../shared/models/student';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
@Component({
  selector: 'app-ngxtable',
  templateUrl:'./ngxtable.component.html',
  styleUrls: ['./ngxtable.component.css']
})
export class NgxtableComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'docx', // the type you want to download
    elementId: 'studTable', // the id of html/table element
    
  }
  students:Student[];
  constructor(private exportAsService: ExportAsService,private studentservice : StudentServiceService) { debugger
   this.studentservice.getAll().subscribe(data => { 
     
       this.students = data; 
     });
   }

   export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name');
   
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    
  }
  ngOnInit() {
  
  }

}
