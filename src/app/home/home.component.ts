import {  AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { StudentServiceService } from '../shared/services/student-service.service';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Student} from '../shared/models/student';
import * as $ from 'jquery';

import { FormGroup, FormControl, Validators, FormBuilder,NgForm, NgModel  } from '@angular/forms';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
 

export class HomeComponent implements AfterViewInit, OnDestroy,OnInit {
   students:any;
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
   @ViewChild(DataTableDirective)
   dtElement: DataTableDirective;
  dataTable: any;
  studform;
  studId:number;
  student : Student;
  studentNameTxt:string;
  studentCourseTxt;
  studentIdTxt;
  subject1Txt;
  subject2Txt;
  constructor(private modalService: NgbModal,private http : HttpClient ,private fb:FormBuilder,private studentservice: StudentServiceService) {
    this.studform=fb.group({
      studentNameTxt : ['',Validators.required],
      studentCourseTxt : ['',Validators.required],
      subject1Txt : ['',Validators.required],
      subject2 : ['',Validators.required]
    });
    console.log(this.students);
   }

  ngOnInit() {
    debugger
  this.studentservice.getAll().subscribe(data => { 
     debugger
     this.students = data; 
   });

   this.dtOptions = {
     ajax:this.students,
    pagingType: 'full_numbers'  
   };
    console.log(this.students);
  }
  ngAfterViewInit(): void {this.dtTrigger.next();}

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
       dtInstance.destroy();
       this.dtTrigger.next();     
   });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  open(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  onSubmit(form: NgForm) {


    if(this.studId==null)
    {
      console.log("insert");
      this.studentservice.postStudent(form.value)
        .subscribe(data => {
         // this.resetForm(form);
        // $('#studTable').DataTable().destroy();
        
         this.studentservice.getAll().subscribe(data => {this.students =data;});
         this.rerender();
      
        })
  //      this.toastr.successToastr('New Student Added Succcessfully', 'Student Register');
    
 //       this.resetForm();
     }
    else
    {
      console.log(this.studentIdTxt);
      this.studentservice.putStudent(this.studentIdTxt,form.value)
      .subscribe(data => {
       // this.resetForm(form);
       this.studentservice.getAll().subscribe(data => {this.students =data;});
       this.rerender();
       // this.toastr.success('New Record Added Succcessfully', 'Employee Register');
      })
      console.log("update");
   //   this.toastr.successToastr('Student Updated Succcessfully', 'Student Updation');
    
  //    this.resetForm();
    }
    

    }

    getSTudentId(id)
    {
      this.studId=id;
    }

    getSelectedStudent(id){
      this.studentservice.getStudent(id).subscribe((stud: any) => {
        if (stud) {
          this.student = stud;
          console.log(stud);
          this.studentIdTxt=stud.studentId;
          this.studentNameTxt=stud.studentName;
          this.studentCourseTxt=stud.studentCourse;
          this.subject1Txt=stud.subject1;
          this.subject2Txt=stud.subject2;
        } else {
          console.log(
            `Sugar Level with id '${id}' not found, returning to list`
          );
        
        }
      });
    }

    resetForm(){
      this.studentIdTxt="";
          this.studentNameTxt="";
          this.studentCourseTxt="";
          this.subject1Txt="";
          this.subject2Txt="";
    }

    deleteStud(id){
      this.studentservice.deleteStudent(id)
        .subscribe(data => {
         // this.resetForm(form);
         this.studentservice.getAll().subscribe(data => {this.students =data; });
         this.rerender();
         // this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
      //  this.toastr.successToastr('Student Deleted Succcessfully', 'Student Deletion');
    
        this.resetForm();
    }

}
