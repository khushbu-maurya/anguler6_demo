
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../shared/services/student-service.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../shared/models/student';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DataTableDirective } from 'angular-datatables';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy, OnInit {
  students: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dataTable: any;
  studform;
  studId: number;
  student: Student;
  studentNameTxt: string;
  studentCourseTxt;
  studentIdTxt;
  subject1Txt;
  subject2Txt;
  studImgCtrl;
  imageUrl: string = "../assets/img/defaultUserImg.png";
  fileToUpload: File = null;
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'studTable', // the id of html/table element
    options: {
      data: this.students
    }
  }

  constructor(private toastr: ToastrManager, private exportAsService: ExportAsService, private modalService: NgbModal, private http: HttpClient, private fb: FormBuilder, private studentservice: StudentServiceService) {

  }

  ngOnInit() {
    debugger
    this.studentservice.getAll().subscribe(data => {
      debugger
      this.students = data;
      console.log(this.students);
    });

    this.dtOptions = {
      ajax: this.students,
      pagingType: 'full_numbers'
    };
    console.log(this.students);
  }
  ngAfterViewInit(): void { this.dtTrigger.next(); }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name');

    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR

  }


  public dmeo() {
    this.exportAsExcelFile(this.students, "styud");
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onSubmit(form: NgForm) {


    if (this.studId == null) {
      console.log("insert");
      console.log(form.value);
      this.studentservice.postStudent(form.value, this.fileToUpload)
        .subscribe(data => {
          // this.resetForm(form);
          // $('#studTable').DataTable().destroy();
          this.resetForm();
          this.studentservice.getAll().subscribe(data => { this.students = data; });
          this.rerender();

        })
      this.toastr.successToastr('New Student Added Succcessfully', 'Student Register');

    }
    else {
      console.log(this.studentIdTxt);
      console.log(this.imageUrl);
      console.log(this.fileToUpload.name);

      console.log(form.value);
      this.studentservice.putStudent(this.studentIdTxt, form.value, this.fileToUpload)
        .subscribe(data => {
          this.resetForm();
          this.studentservice.getAll().subscribe(data => { this.students = data; });
          this.rerender();
        })
      console.log("update");
      this.toastr.successToastr('Student Updated Succcessfully', 'Student Updation');


    }


  }

  getSTudentId(id) {
    this.studId = id;
  }

  getSelectedStudent(id) {
    this.studentservice.getStudent(id).subscribe((stud: any) => {
      if (stud) {
        this.student = stud;
        console.log(stud);
        this.studentIdTxt = stud.studentId;
        this.studentNameTxt = stud.studentName;
        this.studentCourseTxt = stud.studentCourse;
        this.subject1Txt = stud.subject1;
        this.subject2Txt = stud.subject2;
        // this.studImgCtrl=stud.studImg;
        this.imageUrl = stud.studImg;
      } else {
        console.log(
          `Sugar Level with id '${id}' not found, returning to list`
        );

      }
    });
  }

  resetForm() {
    this.studentIdTxt = "";
    this.studentNameTxt = "";
    this.studentCourseTxt = "";
    this.subject1Txt = "";
    this.subject2Txt = "";
    //  this.studImgCtrl="";
    this.imageUrl = "../assets/img/defaultUserImg.png";
  }

  deleteStud(id) {
    this.studentservice.deleteStudent(id)
      .subscribe(data => {
        // this.resetForm(form);
        this.studentservice.getAll().subscribe(data => { this.students = data; });
        this.rerender();
      })
    this.toastr.successToastr('Student Deleted Succcessfully', 'Student Deletion');

    this.resetForm();
  }

  handleFileInput(file: FileList) {
    debugger
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
