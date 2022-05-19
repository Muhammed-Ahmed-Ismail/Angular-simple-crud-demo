import { Injectable } from '@angular/core';
import {Student} from "./_models/student";
import {find} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsList:Student[]=[
    new Student(1, "Ahmed", 19, "os"),
    new Student(2, "Abdo", 12, 'sa'),
    new Student(3, "mido", 12, 'sa'),
    new Student(4, "dsos", 12, 'sa')]
  constructor(public httpClient:HttpClient) { }

  add(student:Student)
  {
   return  this.httpClient.post<Student>("http://localhost:8080/students",student)
  }

  delete(id:number)
  {
    this.studentsList.splice(this.studentsList.findIndex(student=>{
      return student._id===id
    }),1)
  }

  edit(editedStudent:Student)
  {
    this.studentsList.splice(this.studentsList.findIndex(student=>{
      return student._id===editedStudent._id
    }),1,editedStudent)
  }
  getStudentById(id:number):Student | undefined
  {
    return this.studentsList.find(student=>{
      return student._id===id
    })
  }
  getAllStudents()
  {
    return this.httpClient.get<Student[]>("http://localhost:8080/students")
  }
}
