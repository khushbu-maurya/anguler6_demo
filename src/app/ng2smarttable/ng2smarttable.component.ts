import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../shared/services/student-service.service';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-ng2smarttable',
  templateUrl: './ng2smarttable.component.html',
  styleUrls: ['./ng2smarttable.component.css']
})
export class Ng2smarttableComponent implements OnInit {

  settings = {
    columns: {
      studentId: {
        title: 'Student Id',
        editable: false,
        addable: false
      },
      studentName: {
        title: 'Student Name'
      },
      studentCourse: {
        title: 'Student Course'
      },
      subject1: {
        title: 'Subject1'
      },
      subject2: {
        title: 'Subject2'
      }

    },
    attr: {
      class: 'table table-bordered'
    }
  };
  students:Student[];
  constructor(private studentservice : StudentServiceService) { debugger
   this.studentservice.getAll().subscribe(data => { 
     
       this.students = data; 
     });
   }

  ngOnInit() {
  }

}
