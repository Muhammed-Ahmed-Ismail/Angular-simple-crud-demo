import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editedRecord=new Student();
  public displayModal: boolean=false;
  constructor(public studentService:StudentService) { }
  @Input() id:number=0
  ngOnInit(): void {

  }

  showModalDialog() {
    this.displayModal = true;
  }

  edit()
  {
    this.showModalDialog()
    let student=this.studentService.getStudentById(this.id);
    this.editedRecord=  (student ===undefined)? new Student(): new Student(student.id,student.name,student.age,student.deptName)

  }
  save()
  {
    this.studentService.edit(this.editedRecord)
    this.displayModal=false;
  }
}
