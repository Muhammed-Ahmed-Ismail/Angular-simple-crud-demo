import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

}
