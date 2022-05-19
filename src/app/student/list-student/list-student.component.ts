import {Component, Injectable, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit {
studetns:Student[]=[]
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe({
      next:(data)=>{
        this.studetns=data
      }
    })
  }


}
