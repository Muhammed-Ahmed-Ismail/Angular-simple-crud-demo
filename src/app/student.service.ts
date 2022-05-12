import { Injectable } from '@angular/core';
import {Student} from "./_models/student";
import {find} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList:Student[]=[
    new Student(1,"Ahmed",19,"os"),
    new Student(2,"Abdo",12,'sa'),
    new Student(3,"mido",12,'sa'),
    new Student(4,"dsos",12,'sa')]
  constructor() { }

  add(student:Student)
  {
    this.studentsList.push(student)
  }

  delete(id:number)
  {
    this.studentsList.splice(this.studentsList.findIndex(student=>{
      return student.id===id
    }),1)
  }

  edit(editedStudent:Student)
  {
    this.studentsList.splice(this.studentsList.findIndex(student=>{
      return student.id===editedStudent.id
    }),1,editedStudent)
  }
  getStudentById(id:number):Student | undefined
  {
    return this.studentsList.find(student=>{
      return student.id===id
    })
  }
}
