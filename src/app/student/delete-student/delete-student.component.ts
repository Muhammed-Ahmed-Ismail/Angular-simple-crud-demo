import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  constructor(public studentService:StudentService) { }
  @Input() id:number=0;

  ngOnInit(): void {
  }

  delete()
  {
    this.studentService.delete(this.id)
  }
}
