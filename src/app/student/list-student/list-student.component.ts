import {Component, Injectable, Input, OnChanges, OnInit,SimpleChanges} from '@angular/core';
import {StudentService} from "../../_services/student.service";
import {Student} from "../../_models/student";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit , OnChanges{

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {

    this.studentService.provideList()
  }
  ngOnChanges(changes: SimpleChanges) {
  console.log(changes)
  }

  getAllStudents()
{
 // console.log(this.studetns)
  // this.studentService.getAllStudents().subscribe({
  //   next:(data)=>{
  //     this.studetns=data
  //   }
  // })
}

}
