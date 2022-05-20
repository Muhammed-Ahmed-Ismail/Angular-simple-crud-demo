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
    this.studentService.getStudentById(this.id)?.subscribe({
      next:(student)=>{
        this.editedRecord=  student
      }
    });

  }
  save()
  {
    this.studentService.edit(this.editedRecord).subscribe({
      complete:()=>{
        this.studentService.provideList()
      }
    })
    this.displayModal=false;
  }
}
