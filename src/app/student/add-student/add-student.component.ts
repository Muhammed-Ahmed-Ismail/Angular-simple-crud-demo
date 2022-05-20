import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
import {DialogModule} from 'primeng/dialog';
import {Router} from "@angular/router";
import {ListStudentComponent} from "../list-student/list-student.component";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  displayModal: boolean=false;

  constructor(public studentService:StudentService,public router:Router) { }

  ngOnInit(): void {

  }

  showModalDialog() {
    this.displayModal = true;
  }
  add(idField:any,nameField:any,ageField:any,deptField:any)
  {

    let newStudent=new Student(idField.value, nameField.value, ageField.value, deptField.value)

    this.studentService.add(newStudent).subscribe({
      complete:()=>{
      this.studentService.getAllStudents().subscribe({
        next:(data)=>{
         this.studentService.studentsList=data
          this.displayModal=false
        }
      })


      },
    })
  }


}
