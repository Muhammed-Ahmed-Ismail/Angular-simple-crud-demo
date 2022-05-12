import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  displayModal: boolean=false;

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }
  add(idField:any,nameField:any,ageField:any,deptField:any)
  {
    this.displayModal=false
    let newStudent=new Student(idField.value,nameField.value,ageField.value,deptField.value)
    this.studentService.studentsList.push(newStudent);
  }


}
